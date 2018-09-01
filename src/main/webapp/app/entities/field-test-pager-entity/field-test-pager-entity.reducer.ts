import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IFieldTestPagerEntity, defaultValue } from 'app/shared/model/field-test-pager-entity.model';

export const ACTION_TYPES = {
  FETCH_FIELDTESTPAGERENTITY_LIST: 'fieldTestPagerEntity/FETCH_FIELDTESTPAGERENTITY_LIST',
  FETCH_FIELDTESTPAGERENTITY: 'fieldTestPagerEntity/FETCH_FIELDTESTPAGERENTITY',
  CREATE_FIELDTESTPAGERENTITY: 'fieldTestPagerEntity/CREATE_FIELDTESTPAGERENTITY',
  UPDATE_FIELDTESTPAGERENTITY: 'fieldTestPagerEntity/UPDATE_FIELDTESTPAGERENTITY',
  DELETE_FIELDTESTPAGERENTITY: 'fieldTestPagerEntity/DELETE_FIELDTESTPAGERENTITY',
  SET_BLOB: 'fieldTestPagerEntity/SET_BLOB',
  RESET: 'fieldTestPagerEntity/RESET'
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IFieldTestPagerEntity>,
  entity: defaultValue,
  updating: false,
  totalItems: 0,
  updateSuccess: false
};

export type FieldTestPagerEntityState = Readonly<typeof initialState>;

// Reducer

export default (state: FieldTestPagerEntityState = initialState, action): FieldTestPagerEntityState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_FIELDTESTPAGERENTITY_LIST):
    case REQUEST(ACTION_TYPES.FETCH_FIELDTESTPAGERENTITY):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true
      };
    case REQUEST(ACTION_TYPES.CREATE_FIELDTESTPAGERENTITY):
    case REQUEST(ACTION_TYPES.UPDATE_FIELDTESTPAGERENTITY):
    case REQUEST(ACTION_TYPES.DELETE_FIELDTESTPAGERENTITY):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true
      };
    case FAILURE(ACTION_TYPES.FETCH_FIELDTESTPAGERENTITY_LIST):
    case FAILURE(ACTION_TYPES.FETCH_FIELDTESTPAGERENTITY):
    case FAILURE(ACTION_TYPES.CREATE_FIELDTESTPAGERENTITY):
    case FAILURE(ACTION_TYPES.UPDATE_FIELDTESTPAGERENTITY):
    case FAILURE(ACTION_TYPES.DELETE_FIELDTESTPAGERENTITY):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload
      };
    case SUCCESS(ACTION_TYPES.FETCH_FIELDTESTPAGERENTITY_LIST):
      return {
        ...state,
        loading: false,
        totalItems: action.payload.headers['x-total-count'],
        entities: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.FETCH_FIELDTESTPAGERENTITY):
      return {
        ...state,
        loading: false,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.CREATE_FIELDTESTPAGERENTITY):
    case SUCCESS(ACTION_TYPES.UPDATE_FIELDTESTPAGERENTITY):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.DELETE_FIELDTESTPAGERENTITY):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: {}
      };
    case ACTION_TYPES.SET_BLOB:
      const { name, data, contentType } = action.payload;
      return {
        ...state,
        entity: {
          ...state.entity,
          [name]: data,
          [name + 'ContentType']: contentType
        }
      };
    case ACTION_TYPES.RESET:
      return {
        ...initialState
      };
    default:
      return state;
  }
};

const apiUrl = 'api/field-test-pager-entities';

// Actions

export const getEntities: ICrudGetAllAction<IFieldTestPagerEntity> = (page, size, sort) => {
  const requestUrl = `${apiUrl}${sort ? `?page=${page}&size=${size}&sort=${sort}` : ''}`;
  return {
    type: ACTION_TYPES.FETCH_FIELDTESTPAGERENTITY_LIST,
    payload: axios.get<IFieldTestPagerEntity>(`${requestUrl}${sort ? '&' : '?'}cacheBuster=${new Date().getTime()}`)
  };
};

export const getEntity: ICrudGetAction<IFieldTestPagerEntity> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_FIELDTESTPAGERENTITY,
    payload: axios.get<IFieldTestPagerEntity>(requestUrl)
  };
};

export const createEntity: ICrudPutAction<IFieldTestPagerEntity> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_FIELDTESTPAGERENTITY,
    payload: axios.post(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IFieldTestPagerEntity> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_FIELDTESTPAGERENTITY,
    payload: axios.put(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const deleteEntity: ICrudDeleteAction<IFieldTestPagerEntity> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_FIELDTESTPAGERENTITY,
    payload: axios.delete(requestUrl)
  });
  dispatch(getEntities());
  return result;
};

export const setBlob = (name, data, contentType?) => ({
  type: ACTION_TYPES.SET_BLOB,
  payload: {
    name,
    data,
    contentType
  }
});

export const reset = () => ({
  type: ACTION_TYPES.RESET
});
