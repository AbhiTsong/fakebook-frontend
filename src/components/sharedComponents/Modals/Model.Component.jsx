// import React from "react";
// import ReactDOM from "react-dom";
// import "./Model.Styles.scss";

// const Modal = ({ isShowing, hide, formName }) =>
//   isShowing
//     ? ReactDOM.createPortal(
//         <React.Fragment>
//           <div className="modal-overlay" />
//           <div
//             className="modal-wrapper"
//             aria-modal
//             aria-hidden
//             tabIndex={-1}
//             role="dialog"
//           >
//             <div className="modal">
//               <div className="modal-header">
//                 <button
//                   type="button"
//                   className="modal-close-button"
//                   data-dismiss="modal"
//                   aria-label="Close"
//                   onClick={hide}
//                 >
//                   <span aria-hidden="true">&times;</span>
//                 </button>
//               </div>
//               {formName === "SignUp" ? <SignUpComponent /> : "Yooo"}
//             </div>
//           </div>
//         </React.Fragment>,
//         document.body
//       )
//     : null;

// export default Modal;

////////////////////////////////////////////////

import React, { useEffect } from "react";
import "./Model.Styles.scss";
import SignUpComponent from "../../SignUp/SignUp.Component";
import { useDispatch, useSelector } from "react-redux";
// import { modalSelector } from "../../../Redux/Modal/ModalSelector"
import { CloseModal } from "../../../Redux/Modal/ModalAction";

function Modal(props) {
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(CloseModal());
  };

  return (
    <div id="myModal" className="modal">
      <div className="modal-content" tabIndex={-1}>
        <div className="modal-form-container">
          <div className="modal-header">
            <span className="close" onClick={handleCloseModal}>
              ×
            </span>
            <h2>{"Header Bro"}</h2>
          </div>
          <div className="modal-body">
            <SignUpComponent />
          </div>
          <div className="modal-footer">
            <h3>Yoo</h3>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
// }

export default Modal;
