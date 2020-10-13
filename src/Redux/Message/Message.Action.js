import { messageTypes } from "./Message.types";

function messageAction(show) {
  return {
    type: messageTypes.MESSAGE_TOGGLE,
    payload: show,
  };
}

export { messageAction };
