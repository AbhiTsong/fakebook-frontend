import { userActionTypes } from "./User.Types";
import axios from "../../axios";
import { getToken } from "../token";

function createUserAvatar() {
  return {
    type: userActionTypes.CREATE_USER_PROFILE_START,
  };
}

function createUserAvatarSuccess(profile) {
  return {
    type: userActionTypes.CREATE_USER_PROFILE_SUCCESS,
    payload: profile,
  };
}

function createUserAvatarFail(error) {
  return {
    type: userActionTypes.CREATE_USER_PROFILE_FAIL,
    payload: error,
  };
}

// Action For Creating User Profile Pic
function createUserAvatarAction(props) {
  return async function (dispatch) {
    dispatch(createUserAvatar());
    try {
      await axios.post("/users/me/avatar", props, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });
      dispatch(createUserAvatarSuccess(props));
    } catch (error) {
      if (error.response) {
        dispatch(createUserAvatarFail(error.response.data));
      }
    }
  };
}

export { createUserAvatarAction };
