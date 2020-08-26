import React from "react";
import "./Model.Styles.scss";

// Redux Imports
import { useDispatch } from "react-redux";
import { CloseModal } from "../../../Redux/Modal/ModalAction";

// Shared Components
import HorizontalLine from "../HorizontalLine/HorizontalLine";

// Child Components
import SignUpComponent from "../../SignUp/SignUp.Component";
import CreatePostComponent from "../../MainPage/CreatePost/CreatePost.Component";

function Modal(props) {
  console.log("props", props);
  const { header1, header2 } = props;
  console.log("header2, header1", header2, header1);
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(CloseModal());
  };

  return (
    <div id="myModal" className="modal">
      <div className="modal-content" tabIndex={-1}>
        <div className="modal-header">
          <span className="close" onClick={handleCloseModal}>
            ×
          </span>
          <h1 className="header-title">{header1}</h1>
          {header2 && <h5 className="header-sub-title">{header2}</h5>}
        </div>
        <HorizontalLine />
        <div className="modal-body">
          {props.showForm === "SignUp" && <SignUpComponent />}
          {props.showForm === "AddPost" && <CreatePostComponent />}
        </div>
      </div>
    </div>
  );
}
// }

export default Modal;
