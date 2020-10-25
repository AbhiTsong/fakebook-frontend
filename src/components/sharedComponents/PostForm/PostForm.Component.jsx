import React, { memo } from "react";
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
import { ShowModal } from "../../../Redux/Modal/ModalAction";

// Custom Hook
import { useCalcInnerWidth } from "../../../hooks/useCalcInnerWidth";

function PostFormComponent() {
  const dispatch = useDispatch();
  const width = useCalcInnerWidth(window.innerWidth);

  const handleModal = () => {
    dispatch(ShowModal("CREATE_POST"));
  };

  let createPostInput = "What is on your mind Abhi??";
  return (
    <FormContainer width={width}>
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
      <FeeingContainer width={width}>
        <IconTextCtr onClick={handleModal}>
          <IconCntr width={width}>
            <Icon src={VideoCamera} />
          </IconCntr>
          <IconText width={width}>Live Video</IconText>
        </IconTextCtr>
        {/* Photo Upload */}
        <FileUploader />
        <IconTextCamera width={width}>Photo/Video</IconTextCamera>
        {/* Opens the modal to create the post */}
        <IconTextCtr onClick={handleModal}>
          <IconCntr width={width}>
            <Icon src={Smile} />
          </IconCntr>
          <IconText width={width} className="Icon_Text">
            Feeling
          </IconText>
        </IconTextCtr>
      </FeeingContainer>
    </FormContainer>
  );
}

export default memo(PostFormComponent);
