import {ActionType} from './action';

const initialState = {
  users: [],
  sortingType: ``,
  sortingToDown: true,
  isLoading: true,
  update: true,
  group: ``,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_USERS:
      return {...state, users: action.payload, isLoading: false, update: false};

    case ActionType.SET_UPDATE:
      return {...state, update: action.payload};

    case ActionType.SET_SORT_TYPE:
      return {...state, sortingType: action.payload, sortingToDown: true};

    case ActionType.SET_SORT_DIRECTION:
      return {...state, sortingToDown: action.payload};

    case ActionType.SET_LOADING:
      return {...state, isLoading: action.payload};

    case ActionType.SET_GROUP:
      return {...state, group: action.payload};
  }

  return state;
};

export default reducer;
