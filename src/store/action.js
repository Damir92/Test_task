export const ActionType = {
  GET_USERS: `GET_USERS`,
  SET_UPDATE: `SET_UPDATE`,
  SET_SORT_TYPE: `SET_SORT_TYPE`,
  SET_SORT_DIRECTION: `SET_SORT_DIRECTION`,
  SET_LOADING: `SET_LOADING`,
  SET_GROUP: `SET_GROUP`,
};

export const getUsersAction = (data) => ({
  type: ActionType.GET_USERS,
  payload: data,
});

export const setUpdate = (data) => ({
  type: ActionType.SET_UPDATE,
  payload: data,
});

export const setSortType = (data) => ({
  type: ActionType.SET_SORT_TYPE,
  payload: data,
});

export const setSortDirection = (data) => ({
  type: ActionType.SET_SORT_DIRECTION,
  payload: data,
});

export const setGroup = (data) => ({
  type: ActionType.SET_GROUP,
  payload: data,
});
