import { userActionTypes } from "./User.Types";
import axios from "../../axios";
import { getToken } from "../token";

function getAllUserStart() {
  return {
    type: userActionTypes.GET_ALL_USERS_START,
  };
}

function getAllUserSuccess(users) {
  return {
    type: userActionTypes.GET_ALL_USERS_SUCCESS,
    payload: users,
  };
}

function getAllUsersFail(error) {
  return {
    type: userActionTypes.GET_ALL_USERS_FAIL,
    payload: error,
  };
}

function getAllUsersAction() {
  return async function (dispatch) {
    dispatch(getAllUserStart());
    try {
      let users = await axios.get("/users", {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });
      dispatch(getAllUserSuccess(users));
    } catch (error) {
      if (error.response) {
        dispatch(getAllUsersFail(error.response.data));
      }
    }
  };
}

export { getAllUsersAction };
