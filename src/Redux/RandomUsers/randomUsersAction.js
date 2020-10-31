import { RandomUserTypes } from "./RandomUsers.Tyles";
import axios from "axios";

// All Users
const FetchRandomUsersStart = () => {
  return {
    type: RandomUserTypes.GET_RANDOM_USER_START,
  };
};

const FetchRandomUsersSuccess = (users) => {
  return {
    type: RandomUserTypes.GET_RANDOM_USER_SUCCESS,
    payload: users,
  };
};

const FetchRandomUsersFail = (err) => {
  return {
    type: RandomUserTypes.GET_RANDOM_USER_FAIL,
    payload: err,
  };
};


// Mixed Users
const FetchRandomUsersStart2 = () => {
  return {
    type: RandomUserTypes.GET_RANDOM_USER_START2,
  };
};

const FetchRandomUsersSuccess2 = (users) => {
  return {
    type: RandomUserTypes.GET_RANDOM_USER_SUCCESS2,
    payload: users,
  };
};

const FetchRandomUsersFail2 = (err) => {
  return {
    type: RandomUserTypes.GET_RANDOM_USER_FAIL2,
    payload: err,
  };
};

// Mixed Users
const FetchRandomUsersStart3 = () => {
  return {
    type: RandomUserTypes.GET_RANDOM_USER_START3,
  };
};

const FetchRandomUsersSuccess3 = (users) => {
  return {
    type: RandomUserTypes.GET_RANDOM_USER_SUCCESS3,
    payload: users,
  };
};

const FetchRandomUsersFail3 = (err) => {
  return {
    type: RandomUserTypes.GET_RANDOM_USER_FAIL3,
    payload: err,
  };
};

function FetchRandomUsers() {
  return async (dispatch) => {
    dispatch(FetchRandomUsersStart());
    try {
      let users = await axios.get(`https://randomuser.me/api/?results=9`);
      dispatch(FetchRandomUsersSuccess(users));
    } catch (error) {
      if (error.response) {
        dispatch(FetchRandomUsersFail(error.response.data));
      }
    }
  };
}


function FetchRandomUsers2() {
  return async (dispatch) => {
    dispatch(FetchRandomUsersStart2());
    try {
      let users = await axios.get(
        `https://randomuser.me/api/?results=9&gender=male`
      );
      dispatch(FetchRandomUsersSuccess2(users));
    } catch (error) {
      if (error.response) {
        dispatch(FetchRandomUsersFail2(error.response.data));
      }
    }
  };
}

function FetchRandomUsers3() {
  return async (dispatch) => {
    dispatch(FetchRandomUsersStart3());
    try {
      let users = await axios.get(
        `https://randomuser.me/api/?results=70&gender=male`
      );
      dispatch(FetchRandomUsersSuccess3(users));
    } catch (error) {
      if (error.response) {
        dispatch(FetchRandomUsersFail3(error.response.data));
      }
    }
  };
}

export { FetchRandomUsers, FetchRandomUsers2, FetchRandomUsers3 };
