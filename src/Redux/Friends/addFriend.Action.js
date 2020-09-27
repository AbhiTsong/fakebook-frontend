import { friendTypes } from "./friends.Types";
import axios from "../../axios";
import { getToken } from "../token";

function friendRequestStart() {
  return {
    type: friendTypes.SEND_FRIEND_REQUEST_START,
  };
}

function friendRequestSuccess(friendRequest) {
  return {
    type: friendTypes.SEND_FRIEND_REQUEST_SUCCESS,
    payload: friendRequest,
  };
}

function friendRequestFail(error) {
  return {
    type: friendTypes.SEND_FRIEND_REQUEST_FAIL,
    payload: error,
  };
}

function sendFriendRequestAction(id) {
  return async function (dispatch) {
    dispatch(friendRequestStart());
    try {
      let request = await axios.post(`/users/${id}/request`, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });
      dispatch(friendRequestSuccess(request));
    } catch (error) {
      if (error.response) {
        dispatch(friendRequestFail(error.response.data));
      }
    }
  };
}

export { sendFriendRequestAction };
