import React, { memo, useRef, useEffect, useReducer } from "react";
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
import Loader from "../../../Assets/gifs/loading2.gif";

// Redux Import
import { ShowModal } from "../../../Redux/Modal/ModalAction";
import { signInSelector } from "../../../Redux/Auth/SignIn/SignIn.Selector.js";
import { themeSelector } from "../../../Redux/theme/theme.selector.js";

// Custom hook import
import { useCalcDivWidth } from "../../../hooks/useClacDivWidth";

// lOADER INITIAL STATE
const INITIAL_STATE = {
  loader1: false,
  loader2: false,
};

function reducer(state, { type }) {
  switch (type) {
    case "LOADER_1":
      return {
        ...state,
        loader1: true,
      };
    case "RESET_1":
      return {
        ...state,
        loader1: false,
      };

    case "LOADER_2":
      return {
        ...state,
        loader2: true,
      };
    case "RESET_2":
      return {
        ...state,
        loader2: false,
      };

    default:
      return state;
  }
}

function PostFormComponent() {
  const dispatch = useDispatch();
  const currRef = useRef();
  const container = useCalcDivWidth(currRef);
  let { light } = useSelector(themeSelector);
  let [loader, dispatchLoader] = useReducer(reducer, INITIAL_STATE);

  const {
    user: { firstName },
  } = useSelector(signInSelector);

  const handleModal = (modDis) => {
    if (modDis === "1") {
      dispatchLoader({ type: "LOADER_1" });
    } else if (modDis === "2") {
      dispatchLoader({ type: "LOADER_2" });
    }
    dispatch(ShowModal("CREATE_POST"));
  };

  let createPostInput = `What is on your mind, ${firstName}??`;

  useEffect(() => {
    let timer1;
    if (loader.loader1) {
      timer1 = setTimeout(() => {
        dispatchLoader({ type: "RESET_1" });
      }, 10000);
    }
    return () => clearInterval(timer1);
  }, [loader.loader1]);

  useEffect(() => {
    let timer2;
    if (loader.loader1) {
      timer2 = setTimeout(() => {
        dispatchLoader({ type: "RESET_2" });
      }, 1000);
    }
    return () => clearInterval(timer2);
  }, [loader.loader1]);

  return (
    <FormContainer light={light} ref={currRef}>
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
        <IconTextCtr onClick={() => handleModal("1")}>
          <IconCntr loader={loader.loader2}>
            <Icon src={loader.loader1 ? Loader : VideoCamera} loader={loader} />
          </IconCntr>
          {loader && <IconText>Live Video</IconText>}
        </IconTextCtr>
        {/* Photo Upload Icon */}
        <FileUploader />
        {container > 800 && <IconTextCamera>Photo/Video</IconTextCamera>}
        {/* Opens the modal to create the post */}
        <IconTextCtr onClick={() => handleModal("2")}>
          <IconCntr loader={loader.loader2}>
            <Icon src={loader.loader2 ? Loader : Smile} loader={loader} />
          </IconCntr>
          <IconText className="Icon_Text">Feeling</IconText>
        </IconTextCtr>
      </FeeingContainer>
    </FormContainer>
  );
}

export default memo(PostFormComponent);
