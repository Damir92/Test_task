import {createSelector} from 'reselect';

import {sortUsers} from '../utils';
import {SortingType} from '../const';

export const getUsers = (state) => [...state.users];

export const getUpdate = (state) => state.update;

export const getSortingType = (state) => state.sortingType;

export const getSortingDirection = (state) => state.sortingToDown;

export const getLoading = (state) => state.isLoading;

export const getGroup = (state) => state.group;

export const getUserGroups = (state) => [...new Set(state.users.map((item) => item[SortingType.GROUP]))];

export const getSortedUsers = createSelector(
    getUsers,
    getGroup,
    getSortingType,
    getSortingDirection,
    (users, group, type, direction) => {
      users = group ? users.filter((item) => item.group === group) : users;
      if (type) {
        if (direction) {
          return sortUsers(users, type);
        } else {
          return sortUsers(users, type).reverse();
        }
      }
      return users;
    }
);
