import MockAdapter from 'axios-mock-adapter';

import reducer from './reducer';
import {ActionType} from './action';
import {createAPI} from '../services/api';
import {postNewUser} from './api-actions';
import {APIRoutes} from '../const';

const api = createAPI(() => {});

const testUser = {
  firstName: `testFirstName`,
  lastName: `testLastName`,
  group: `testGroup`,
};

describe(`Test reducer`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      users: [],
      sortingType: ``,
      sortingToDown: true,
      isLoading: true,
      update: true,
      group: ``,
    });
  });

  it(`Reducer should get users`, () => {
    expect(reducer({
      isLoading: true,
      users: [],
    }, {
      type: ActionType.GET_USERS,
      payload: [{}, {}, {}],
    })).toEqual({
      isLoading: false,
      users: [{}, {}, {}],
      update: false,
    });
  });

  it(`Reducer should set sorting type`, () => {
    expect(reducer({
    }, {
      type: ActionType.SET_SORT_TYPE,
      payload: `firstName`,
    })).toEqual({
      sortingType: `firstName`,
      sortingToDown: true,
    });
  });

  it(`Reducer should set sort direction`, () => {
    expect(reducer({
      sortingToDown: false,
    }, {
      type: ActionType.SET_SORT_DIRECTION,
      payload: true,
    })).toEqual({
      sortingToDown: true,
    });
  });

  it(`Reducer should set loading`, () => {
    expect(reducer({
      isLoading: true,
    }, {
      type: ActionType.SET_LOADING,
      payload: false,
    })).toEqual({
      isLoading: false,
    });
  });

  it(`Reducer should set group`, () => {
    expect(reducer({
      group: ``,
    }, {
      type: ActionType.SET_GROUP,
      payload: `Admin`,
    })).toEqual({
      group: `Admin`,
    });
  });
});

describe(`Async operation work correctly`, () => {
  it(`Should make correct API POST call to /users`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const userSetter = postNewUser(testUser);

    apiMock
      .onPost(APIRoutes.USERS_3, testUser)
      .reply(201, true);

    return userSetter(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_UPDATE,
          payload: true,
        });
      });
  });
});
