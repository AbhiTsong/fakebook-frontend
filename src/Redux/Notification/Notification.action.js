import { notificationTypes } from "./Notification.types";

function notificationAction(show) {
  return {
    type: notificationTypes.NOTIFICATION_TOGGLE,
    payload: show,
  };
}

export { notificationAction };
