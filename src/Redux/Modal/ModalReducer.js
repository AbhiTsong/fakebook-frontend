import { ModalTypes } from "./ModalTypes";

const INITIAL_STATE = {
  show: false,
  content: "",
};

function ModalReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ModalTypes.SHOW_MODAL:
      return {
        ...state,
        show: true,
        content: action.payload,
      };

    case ModalTypes.CLOSE_MODAL: {
      return {
        ...state,
        show: false,
        content: "",
      };
    }

    default:
      return state;
  }
}

export { ModalReducer };
