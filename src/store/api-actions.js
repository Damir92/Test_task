import {APIRoutes} from "../const";
import {getUsersAction, setUpdate} from "./action";

/* eslint max-nested-callbacks: ["error", 4] */

export const fetchUsers = () => (dispatch, _getState, api) => {
  let result = [];
  return api.get(APIRoutes.USERS)
    .then((request) => {
      result = [...result, ...request.data];
      api.get(APIRoutes.USERS_1)
        .then((request1) => {
          result = [...result, ...request1.data];
          api.get(APIRoutes.USERS_2)
            .then((request2) => {
              result = [...result, ...request2.data];
              api.get(APIRoutes.USERS_3)
                .then((request3) => {
                  result = [...result, ...request3.data];
                  return dispatch(getUsersAction(result));
                });
            });
        });
    });
};

export const postNewUser = (value) => (dispatch, _getState, api) => (
  api.post(APIRoutes.USERS_3, value)
    .then(() => dispatch(setUpdate(true)))
);
