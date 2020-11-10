import { ModalTypes } from "./ModalTypes";

const INITIAL_STATE = {
  show: false,
  show2: false,
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
    case ModalTypes.SHOW_MODAL2:
      return {
        ...state,
        show2: true,
        content: action.payload,
      };

    case ModalTypes.CLOSE_MODAL: {
      return {
        ...state,
        show: false,
        content: "",
      };
    }

    case ModalTypes.CLOSE_MODAL2: {
      return {
        ...state,
        show2: false,
        content: "",
      };
    }

    default:
      return state;
  }
}

export { ModalReducer };
