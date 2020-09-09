import React from "react";
import "./Model.Styles.scss";

// Redux Imports
import { useDispatch, useSelector } from "react-redux";
import { CloseModal } from "../../../Redux/Modal/ModalAction";
import { postSelector } from "../../../Redux/Post/post.selector";
import { modalSelector } from "../../../Redux/Modal/ModalSelector";

// Shared Components
import HorizontalLine from "../HorizontalLine/HorizontalLine";
import UserPhotoPosts from "../../sharedComponents/UserPhotoPosts/UserPhotoPosts.component";

// Child Components
import SignUpComponent from "../../SignUp/SignUp.Component";
import CreatePostComponent from "../../sharedComponents/CreatePost/CreatePost.Component";

function Modal(props) {
  // console.log("Modal --- ",props)
  // const { header1, header2 } = props;
  const dispatch = useDispatch();
  let postPath = useSelector(postSelector);
  let modalContent = useSelector(modalSelector);
  let path = postPath.photoPath;

  const handleCloseModal = () => {
    dispatch(CloseModal());
  };

  console.log("modalContent ---- ", modalContent);

  return (
    <div>
      {/* <div className="modal-content" tabIndex={-1}> */}
      {/* <div className="modal-header"> */}
      {/* <span className="close" onClick={handleCloseModal}> */}
      {/* × */}
      {/* </span> */}
      {/* <h1 className="header-title">{header1}</h1> */}
      {/* {header2 && <h5 className="header-sub-title">{header2}</h5>} */}
      {/* </div> */}

      <HorizontalLine />
      {/* <div className="modal-body"> */}
        {modalContent.content === "SIGN_UP_USER" && <SignUpComponent />}
        {modalContent.content === "shoe_photos" && <UserPhotoPosts />}
        {modalContent.content === "CREATE_POST" && (
          <CreatePostComponent path={path} />
        )}
      {/* </div> */}
      {/* </div> */}
    </div>
  );
}
// }

export default Modal;
