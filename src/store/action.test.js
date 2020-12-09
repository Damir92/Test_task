import {
  ActionType,
  getUsersAction,
  setSortType,
  setSortDirection,
  setGroup,
} from './action';

describe(`Action creators work correctly`, () => {
  it(`Action creator for get users returns action users payload`, () => {
    expect(getUsersAction([{}, {}, {}])).toEqual({
      type: ActionType.GET_USERS,
      payload: [{}, {}, {}],
    });
  });

  it(`Action creator for set sort type returns action with sort type payload`, () => {
    expect(setSortType(`users`)).toEqual({
      type: ActionType.SET_SORT_TYPE,
      payload: `users`,
    });
  });

  it(`Action creator for set sort direction returns action sort direction payload`, () => {
    expect(setSortDirection(true)).toEqual({
      type: ActionType.SET_SORT_DIRECTION,
      payload: true,
    });
  });

  it(`Action creator for set group returns action group payload`, () => {
    expect(setGroup(`admin`)).toEqual({
      type: ActionType.SET_GROUP,
      payload: `admin`,
    });
  });
});
