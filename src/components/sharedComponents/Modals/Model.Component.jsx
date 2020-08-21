import React from "react";
import ReactDOM from "react-dom";
import FormsComponent from "../Forms/Forms.Component";
import "./Model.Styles.scss";

const Modal = ({ isShowing, hide, formName }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="modal-overlay" />
          <div
            className="modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal">
              <div className="modal-header">
                <button
                  type="button"
                  className="modal-close-button"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={hide}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              {formName === "SignUp" ? <FormsComponent /> : "Yooo"}
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default Modal;
