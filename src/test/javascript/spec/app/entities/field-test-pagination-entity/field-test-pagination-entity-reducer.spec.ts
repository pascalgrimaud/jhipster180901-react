import axios from 'axios';

import configureStore from 'redux-mock-store';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import sinon from 'sinon';

import reducer, {
  ACTION_TYPES,
  createEntity,
  deleteEntity,
  getEntities,
  getEntity,
  updateEntity,
  reset
} from 'app/entities/field-test-pagination-entity/field-test-pagination-entity.reducer';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';
import { IFieldTestPaginationEntity, defaultValue } from 'app/shared/model/field-test-pagination-entity.model';

// tslint:disable no-invalid-template-strings
describe('Entities reducer tests', () => {
  function isEmpty(element): boolean {
    if (element instanceof Array) {
      return element.length === 0;
    } else {
      return Object.keys(element).length === 0;
    }
  }

  const initialState = {
    loading: false,
    errorMessage: null,
    entities: [] as ReadonlyArray<IFieldTestPaginationEntity>,
    entity: defaultValue,
    totalItems: 0,
    updating: false,
    updateSuccess: false
  };

  function testInitialState(state) {
    expect(state).toMatchObject({
      loading: false,
      errorMessage: null,
      updating: false,
      updateSuccess: false
    });
    expect(isEmpty(state.entities));
    expect(isEmpty(state.entity));
  }

  function testMultipleTypes(types, payload, testFunction) {
    types.forEach(e => {
      testFunction(reducer(undefined, { type: e, payload }));
    });
  }

  describe('Common', () => {
    it('should return the initial state', () => {
      testInitialState(reducer(undefined, {}));
    });
  });

  describe('Requests', () => {
    it('should set state to loading', () => {
      testMultipleTypes(
        [REQUEST(ACTION_TYPES.FETCH_FIELDTESTPAGINATIONENTITY_LIST), REQUEST(ACTION_TYPES.FETCH_FIELDTESTPAGINATIONENTITY)],
        {},
        state => {
          expect(state).toMatchObject({
            errorMessage: null,
            updateSuccess: false,
            loading: true
          });
        }
      );
    });

    it('should set state to updating', () => {
      testMultipleTypes(
        [
          REQUEST(ACTION_TYPES.CREATE_FIELDTESTPAGINATIONENTITY),
          REQUEST(ACTION_TYPES.UPDATE_FIELDTESTPAGINATIONENTITY),
          REQUEST(ACTION_TYPES.DELETE_FIELDTESTPAGINATIONENTITY)
        ],
        {},
        state => {
          expect(state).toMatchObject({
            errorMessage: null,
            updateSuccess: false,
            updating: true
          });
        }
      );
    });

    it('should reset the state', () => {
      expect(
        reducer(
          { ...initialState, loading: true },
          {
            type: ACTION_TYPES.RESET
          }
        )
      ).toEqual({
        ...initialState
      });
    });
  });

  describe('Failures', () => {
    it('should set a message in errorMessage', () => {
      testMultipleTypes(
        [
          FAILURE(ACTION_TYPES.FETCH_FIELDTESTPAGINATIONENTITY_LIST),
          FAILURE(ACTION_TYPES.FETCH_FIELDTESTPAGINATIONENTITY),
          FAILURE(ACTION_TYPES.CREATE_FIELDTESTPAGINATIONENTITY),
          FAILURE(ACTION_TYPES.UPDATE_FIELDTESTPAGINATIONENTITY),
          FAILURE(ACTION_TYPES.DELETE_FIELDTESTPAGINATIONENTITY)
        ],
        'error message',
        state => {
          expect(state).toMatchObject({
            errorMessage: 'error message',
            updateSuccess: false,
            updating: false
          });
        }
      );
    });
  });

  describe('Successes', () => {
    it('should fetch all entities', () => {
      const payload = { data: [{ 1: 'fake1' }, { 2: 'fake2' }], headers: { 'x-total-count': 123 } };
      expect(
        reducer(undefined, {
          type: SUCCESS(ACTION_TYPES.FETCH_FIELDTESTPAGINATIONENTITY_LIST),
          payload
        })
      ).toEqual({
        ...initialState,
        loading: false,
        totalItems: payload.headers['x-total-count'],
        entities: payload.data
      });
    });

    it('should fetch a single entity', () => {
      const payload = { data: { 1: 'fake1' } };
      expect(
        reducer(undefined, {
          type: SUCCESS(ACTION_TYPES.FETCH_FIELDTESTPAGINATIONENTITY),
          payload
        })
      ).toEqual({
        ...initialState,
        loading: false,
        entity: payload.data
      });
    });

    it('should create/update entity', () => {
      const payload = { data: 'fake payload' };
      expect(
        reducer(undefined, {
          type: SUCCESS(ACTION_TYPES.CREATE_FIELDTESTPAGINATIONENTITY),
          payload
        })
      ).toEqual({
        ...initialState,
        updating: false,
        updateSuccess: true,
        entity: payload.data
      });
    });

    it('should delete entity', () => {
      const payload = 'fake payload';
      const toTest = reducer(undefined, {
        type: SUCCESS(ACTION_TYPES.DELETE_FIELDTESTPAGINATIONENTITY),
        payload
      });
      expect(toTest).toMatchObject({
        updating: false,
        updateSuccess: true
      });
    });
  });

  describe('Actions', () => {
    let store;

    const resolvedObject = { value: 'whatever' };
    beforeEach(() => {
      const mockStore = configureStore([thunk, promiseMiddleware()]);
      store = mockStore({});
      axios.get = sinon.stub().returns(Promise.resolve(resolvedObject));
      axios.post = sinon.stub().returns(Promise.resolve(resolvedObject));
      axios.put = sinon.stub().returns(Promise.resolve(resolvedObject));
      axios.delete = sinon.stub().returns(Promise.resolve(resolvedObject));
    });

    it('dispatches ACTION_TYPES.FETCH_FIELDTESTPAGINATIONENTITY_LIST actions', async () => {
      const expectedActions = [
        {
          type: REQUEST(ACTION_TYPES.FETCH_FIELDTESTPAGINATIONENTITY_LIST)
        },
        {
          type: SUCCESS(ACTION_TYPES.FETCH_FIELDTESTPAGINATIONENTITY_LIST),
          payload: resolvedObject
        }
      ];
      await store.dispatch(getEntities()).then(() => expect(store.getActions()).toEqual(expectedActions));
    });

    it('dispatches ACTION_TYPES.FETCH_FIELDTESTPAGINATIONENTITY actions', async () => {
      const expectedActions = [
        {
          type: REQUEST(ACTION_TYPES.FETCH_FIELDTESTPAGINATIONENTITY)
        },
        {
          type: SUCCESS(ACTION_TYPES.FETCH_FIELDTESTPAGINATIONENTITY),
          payload: resolvedObject
        }
      ];
      await store.dispatch(getEntity(42666)).then(() => expect(store.getActions()).toEqual(expectedActions));
    });

    it('dispatches ACTION_TYPES.CREATE_FIELDTESTPAGINATIONENTITY actions', async () => {
      const expectedActions = [
        {
          type: REQUEST(ACTION_TYPES.CREATE_FIELDTESTPAGINATIONENTITY)
        },
        {
          type: SUCCESS(ACTION_TYPES.CREATE_FIELDTESTPAGINATIONENTITY),
          payload: resolvedObject
        },
        {
          type: REQUEST(ACTION_TYPES.FETCH_FIELDTESTPAGINATIONENTITY_LIST)
        },
        {
          type: SUCCESS(ACTION_TYPES.FETCH_FIELDTESTPAGINATIONENTITY_LIST),
          payload: resolvedObject
        }
      ];
      await store.dispatch(createEntity({ id: 1 })).then(() => expect(store.getActions()).toEqual(expectedActions));
    });

    it('dispatches ACTION_TYPES.UPDATE_FIELDTESTPAGINATIONENTITY actions', async () => {
      const expectedActions = [
        {
          type: REQUEST(ACTION_TYPES.UPDATE_FIELDTESTPAGINATIONENTITY)
        },
        {
          type: SUCCESS(ACTION_TYPES.UPDATE_FIELDTESTPAGINATIONENTITY),
          payload: resolvedObject
        },
        {
          type: REQUEST(ACTION_TYPES.FETCH_FIELDTESTPAGINATIONENTITY_LIST)
        },
        {
          type: SUCCESS(ACTION_TYPES.FETCH_FIELDTESTPAGINATIONENTITY_LIST),
          payload: resolvedObject
        }
      ];
      await store.dispatch(updateEntity({ id: 1 })).then(() => expect(store.getActions()).toEqual(expectedActions));
    });

    it('dispatches ACTION_TYPES.DELETE_FIELDTESTPAGINATIONENTITY actions', async () => {
      const expectedActions = [
        {
          type: REQUEST(ACTION_TYPES.DELETE_FIELDTESTPAGINATIONENTITY)
        },
        {
          type: SUCCESS(ACTION_TYPES.DELETE_FIELDTESTPAGINATIONENTITY),
          payload: resolvedObject
        },
        {
          type: REQUEST(ACTION_TYPES.FETCH_FIELDTESTPAGINATIONENTITY_LIST)
        },
        {
          type: SUCCESS(ACTION_TYPES.FETCH_FIELDTESTPAGINATIONENTITY_LIST),
          payload: resolvedObject
        }
      ];
      await store.dispatch(deleteEntity(42666)).then(() => expect(store.getActions()).toEqual(expectedActions));
    });

    it('dispatches ACTION_TYPES.RESET actions', async () => {
      const expectedActions = [
        {
          type: ACTION_TYPES.RESET
        }
      ];
      await store.dispatch(reset());
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('blobFields', () => {
    it('should properly set a blob in state.', () => {
      const payload = { name: 'fancyBlobName', data: 'fake data', contentType: 'fake dataType' };
      expect(
        reducer(undefined, {
          type: ACTION_TYPES.SET_BLOB,
          payload
        })
      ).toEqual({
        ...initialState,
        entity: {
          ...initialState.entity,
          fancyBlobName: payload.data,
          fancyBlobNameContentType: payload.contentType
        }
      });
    });
  });
});
