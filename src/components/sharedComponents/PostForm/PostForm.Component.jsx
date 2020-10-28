import React, { memo, useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

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
import { signInSelector } from "../../../Redux/Auth/SignIn/SignIn.Selector.js";

// Custom hook import
import { useCalcDivWidth } from "../../../hooks/useClacDivWidth";

function PostFormComponent() {
  const dispatch = useDispatch();
  const currRef = useRef();
  const container = useCalcDivWidth(currRef)
  const {
    user: { firstName },
  } = useSelector(signInSelector);

  const handleModal = () => {
    dispatch(ShowModal("CREATE_POST"));
  };

  console.log("This is the container", container);

  let createPostInput = `What is on your mind, ${firstName}??`;
  return (
    <FormContainer ref={currRef}>
      {/* Image And Input  */}
      <ImgInputCntr>
        <FormPicContr>
          <UserProfilePic />
        </FormPicContr>
        <PostFormContr>
          <StyledInput
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
        {/* Photo Upload Icon */}
        <FileUploader />
        {container > 800 && <IconTextCamera>Photo/Video</IconTextCamera>}
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
