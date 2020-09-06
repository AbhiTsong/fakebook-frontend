import React from "react";
import "./Model.Styles.scss";

// Redux Imports
import { useDispatch, useSelector } from "react-redux";
import { CloseModal } from "../../../Redux/Modal/ModalAction";
import { postSelector } from "../../../Redux/Post/post.selector";

// Shared Components
import HorizontalLine from "../HorizontalLine/HorizontalLine";

// Child Components
import SignUpComponent from "../../SignUp/SignUp.Component";
import CreatePostComponent from "../../sharedComponents/CreatePost/CreatePost.Component";

function Modal(props) {
  const { header1, header2 } = props;
  const dispatch = useDispatch();
  let postPath = useSelector(postSelector);

  let path = postPath.photoPath;

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
          {/* {props.render()} */}
          {props.showForm === "AddPost" && <CreatePostComponent path={path} />}
        </div>
      </div>
    </div>
  );
}
// }

export default Modal;
