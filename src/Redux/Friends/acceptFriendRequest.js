import { friendTypes } from "./friends.Types";
import axios from "../../axios";
import { getToken } from "../token";

function acceptRequestStart() {
  return {
    type: friendTypes.ACCEPT_REQUEST_RECEIVED_START,
  };
}

function acceptRequestSuccess(req) {
  return {
    type: friendTypes.ACCEPT_REQUEST_RECEIVED_SUCCESS,
    payload: req,
  };
}

function acceptRequestFail() {
  return {
    type: friendTypes.FIND_REQUEST_RECEIVED_FAIL,
  };
}

function acceptRequestAction(id) {
  return async function (dispatch) {
    dispatch(acceptRequestStart());
    try {
      let user = await axios.post(`/users/${id}/accept`, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });
      dispatch(acceptRequestSuccess(user));
    } catch (error) {
      if (error.response) {
        dispatch(acceptRequestFail(error.response.data));
      }
    }
  };
}

export { acceptRequestAction };
