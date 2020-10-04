import { friendTypes } from "./friends.Types";
import axios from "../../axios";
import { getToken } from "../token";

function getFriendRequestsStart() {
  return {
    type: friendTypes.FIND_REQUEST_RECEIVED_START,
  };
}

function getFriendRequestsSuccess(requests) {
  return {
    type: friendTypes.FIND_REQUEST_RECEIVED_SUCCESS,
    payload: requests,
  };
}

function getFriendRequestsFail(error) {
  return {
    type: friendTypes.FIND_REQUEST_RECEIVED_FAIL,
    payload: error,
  };
}

function friendRequestsAction() {
  return async function (dispatch) {
    dispatch(getFriendRequestsStart());
    try {
      let requests = await axios.get("/users/requests", {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });
      dispatch(getFriendRequestsSuccess(requests));
    } catch (error) {
      if (error.response) {
        dispatch(getFriendRequestsFail(error.response.data));
      }
    }
  };
}

export { friendRequestsAction };
