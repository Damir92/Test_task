import {SortingType} from "./const";

export const sortUsers = (users, type) => {
  switch (type) {
    case SortingType.FIRST_NAME:
      return users.sort((a, b) => {
        if (a[SortingType.FIRST_NAME] > b[SortingType.FIRST_NAME]) {
          return 1;
        }
        if (a[SortingType.FIRST_NAME] < b[SortingType.FIRST_NAME]) {
          return -1;
        }
        return 0;
      });

    case SortingType.LAST_NAME:
      return users.sort((a, b) => {
        if (a[SortingType.LAST_NAME] > b[SortingType.LAST_NAME]) {
          return 1;
        }
        if (a[SortingType.LAST_NAME] < b[SortingType.LAST_NAME]) {
          return -1;
        }
        return 0;
      });

    case SortingType.GROUP:
      return users.sort((a, b) => {
        if (a[SortingType.GROUP] > b[SortingType.GROUP]) {
          return 1;
        }
        if (a[SortingType.GROUP] < b[SortingType.GROUP]) {
          return -1;
        }
        return 0;
      });

    default:
      return users;
  }
};

export const groupUsers = (users, group) => {
  return users.filter((item) => item[SortingType.GROUP] === group);
};
