import { ModalTypes } from "./ModalTypes";

function ShowModal() {
  return {
    type: ModalTypes.SHOW_MODAL,
  };
}

function CloseModal() {
  return {
    type: ModalTypes.CLOSE_MODAL,
  };
}

export { ShowModal, CloseModal };
