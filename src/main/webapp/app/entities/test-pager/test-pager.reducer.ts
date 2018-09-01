import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { ITestPager, defaultValue } from 'app/shared/model/test-pager.model';

export const ACTION_TYPES = {
  FETCH_TESTPAGER_LIST: 'testPager/FETCH_TESTPAGER_LIST',
  FETCH_TESTPAGER: 'testPager/FETCH_TESTPAGER',
  CREATE_TESTPAGER: 'testPager/CREATE_TESTPAGER',
  UPDATE_TESTPAGER: 'testPager/UPDATE_TESTPAGER',
  DELETE_TESTPAGER: 'testPager/DELETE_TESTPAGER',
  RESET: 'testPager/RESET'
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<ITestPager>,
  entity: defaultValue,
  updating: false,
  totalItems: 0,
  updateSuccess: false
};

export type TestPagerState = Readonly<typeof initialState>;

// Reducer

export default (state: TestPagerState = initialState, action): TestPagerState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_TESTPAGER_LIST):
    case REQUEST(ACTION_TYPES.FETCH_TESTPAGER):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true
      };
    case REQUEST(ACTION_TYPES.CREATE_TESTPAGER):
    case REQUEST(ACTION_TYPES.UPDATE_TESTPAGER):
    case REQUEST(ACTION_TYPES.DELETE_TESTPAGER):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true
      };
    case FAILURE(ACTION_TYPES.FETCH_TESTPAGER_LIST):
    case FAILURE(ACTION_TYPES.FETCH_TESTPAGER):
    case FAILURE(ACTION_TYPES.CREATE_TESTPAGER):
    case FAILURE(ACTION_TYPES.UPDATE_TESTPAGER):
    case FAILURE(ACTION_TYPES.DELETE_TESTPAGER):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload
      };
    case SUCCESS(ACTION_TYPES.FETCH_TESTPAGER_LIST):
      return {
        ...state,
        loading: false,
        totalItems: action.payload.headers['x-total-count'],
        entities: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.FETCH_TESTPAGER):
      return {
        ...state,
        loading: false,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.CREATE_TESTPAGER):
    case SUCCESS(ACTION_TYPES.UPDATE_TESTPAGER):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.DELETE_TESTPAGER):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: {}
      };
    case ACTION_TYPES.RESET:
      return {
        ...initialState
      };
    default:
      return state;
  }
};

const apiUrl = 'api/test-pagers';

// Actions

export const getEntities: ICrudGetAllAction<ITestPager> = (page, size, sort) => {
  const requestUrl = `${apiUrl}${sort ? `?page=${page}&size=${size}&sort=${sort}` : ''}`;
  return {
    type: ACTION_TYPES.FETCH_TESTPAGER_LIST,
    payload: axios.get<ITestPager>(`${requestUrl}${sort ? '&' : '?'}cacheBuster=${new Date().getTime()}`)
  };
};

export const getEntity: ICrudGetAction<ITestPager> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_TESTPAGER,
    payload: axios.get<ITestPager>(requestUrl)
  };
};

export const createEntity: ICrudPutAction<ITestPager> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_TESTPAGER,
    payload: axios.post(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<ITestPager> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_TESTPAGER,
    payload: axios.put(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const deleteEntity: ICrudDeleteAction<ITestPager> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_TESTPAGER,
    payload: axios.delete(requestUrl)
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET
});
