import { ModalTypes } from "./ModalTypes";

function ShowModal(modalContent) {
  return {
    type: ModalTypes.SHOW_MODAL,
    payload: modalContent,
  };
}

function ShowModal2(modalContent) {
  return {
    type: ModalTypes.SHOW_MODAL2,
    payload: modalContent,
  };
}

function CloseModal() {
  return {
    type: ModalTypes.CLOSE_MODAL,
  };
}

function CloseModal2() {
  return {
    type: ModalTypes.CLOSE_MODAL2,
  };
}

export { ShowModal, CloseModal, ShowModal2, CloseModal2 };
