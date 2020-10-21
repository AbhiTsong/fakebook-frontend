import React, { memo } from "react";
// import "./PostForm.Styles.scss";
import { useDispatch } from "react-redux";

// Styled Import
import {
  FormContainer,
  ImgInputCntr,
  FormPicContr,
  PostFormContr,
  StyledInput,
  FeeingContainer,
  IconTextCtr,
  IconCntr,
  Icon,
  IconText,
  IconTextCamera,
} from "./PostForm.Styles.js";

// Icons Import
// import Camera from "../../../Assets/images/camera.png"

// Child Components
import HorizontalLine from "../HorizontalLine/HorizontalLine";

// Shared Components
import FileUploader from "../FileUploader/FileUploader.Component";
import UserProfilePic from "../../sharedComponents/UserProfilePic/UserProfilePic";

// Icom Image Import
import VideoCamera from "../../../Assets/images/video.png";
import Smile from "../../../Assets/images/smile.png";

// Redux Import
// import { postSelector } from "../../../Redux/Post/post.selector";
import { modalSelector } from "../../../Redux/Modal/ModalSelector";
import { ShowModal } from "../../../Redux/Modal/ModalAction";

let createPostInput = "What is on your mind Abhi??";
// Componetnt Code
function PostFormComponent() {
  // Redux State Change
  const dispatch = useDispatch();
  // const postText = useSelector(postSelector);

  const handleModal = () => {
    dispatch(ShowModal("CREATE_POST"));
  };

  return (
    <FormContainer>
      {/* Image And Input  */}
      <ImgInputCntr>
        <FormPicContr>
          <UserProfilePic />
        </FormPicContr>
        <PostFormContr>
          <StyledInput
            // className="Post_Form"
            type="text"
            placeholder={createPostInput}
            onClick={handleModal}
          />
        </PostFormContr>
      </ImgInputCntr>
      <HorizontalLine />
      {/*Opens the modal to create the post */}
      <FeeingContainer>
        <IconTextCtr onClick={handleModal}>
          <IconCntr>
            <Icon src={VideoCamera} />
          </IconCntr>
          <IconText>Live Video</IconText>
        </IconTextCtr>
        {/* Photo Upload */}
        <FileUploader />
        <IconTextCamera>Photo/Video</IconTextCamera>
        {/* Opens the modal to create the post */}
        <IconTextCtr onClick={handleModal}>
          <IconCntr>
            <Icon src={Smile} />
          </IconCntr>
          <IconText className="Icon_Text">Feeling</IconText>
        </IconTextCtr>
      </FeeingContainer>
    </FormContainer>
  );
}

export default memo(PostFormComponent);
