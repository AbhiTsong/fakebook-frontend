import { ModalTypes } from "./ModalTypes";

const INITIAL_STATE = {
  show: false,
};

function ModalReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ModalTypes.SHOW_MODAL:
      return {
        show: true,
      };

    case ModalTypes.CLOSE_MODAL: {
      return {
        show: false,
      };
    }

    default:
      return state;
  }
}

export { ModalReducer };
