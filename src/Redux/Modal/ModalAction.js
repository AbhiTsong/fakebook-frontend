import { ModalTypes } from "./ModalTypes";

function ShowModal(modalContent) {
  return {
    type: ModalTypes.SHOW_MODAL,
    payload: modalContent,
  };
}

function CloseModal() {
  return {
    type: ModalTypes.CLOSE_MODAL,
  };
}

export { ShowModal, CloseModal };
