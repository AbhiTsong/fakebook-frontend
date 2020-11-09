import { notificationTypes } from "./Notification.types";

const INITIAL_STATE = {
  showNotification: false,
};

function notificationReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case notificationTypes.NOTIFICATION_TOGGLE:
      return {
        showNotification: action.payload,
      };

    default:
      return state;
  }
}

export { notificationReducer };
