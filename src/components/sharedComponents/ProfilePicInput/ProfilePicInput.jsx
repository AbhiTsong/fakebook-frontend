import React, { useRef, useEffect, useState } from "react";

// Gif Import
import Loader from "../../../Assets/gifs/loading2.gif";

// Styled Imports
import {
  InputContainer,
  UploadButton,
  LoadingImg,
  FileInput,
} from "./ProfilePic.Input.styles";

// Redux Imports
import { useDispatch } from "react-redux";
import { getProfilePath } from "../../../Redux/User/userpProfilePathAction";

// Shared Component
import { ShowModal } from "../../../Redux/Modal/ModalAction";
import { ToolTip } from "../ToolTip/ToolTip";

// utility import
import { readFileSize } from "../../../utility/readURI";

function FileUploaderWithCropper() {
  let fileInput = useRef();
  const dispatch = useDispatch();
  let [file, setFile] = useState("");
  let [imgURL, setURL] = useState("");
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    if (file !== "" && imgURL !== "") {
      dispatch(ShowModal("ADD_NEW_PROFILE_PIC"));
      dispatch(getProfilePath([imgURL, file]));
    }
  }, [dispatch, file, imgURL]);

  // Function For Reading the path of the file user wants to upload
  function readURI(e) {
    let reader = new FileReader();
    reader.onload = function (ev) {
      setURL(ev.target.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  }

  // Tuner Function For showing the loader
  function timerFunc() {
    return setTimeout(() => {
      setLoading(false);
    }, 10000);
  }

  // Effeft For Clearing the timer function
  useEffect(() => {
    return () => timerFunc();
  }, []);

  function handleFileInput(e) {
    // eslint-disable-next-line no-unused-expressions
    readFileSize(e) ? "" : readURI(e);
    const seleted = e.target.files[0];

    // seleted === undefined ? setURL(null) : "";
    if (seleted && seleted.size > 1048576) {
      return setFile("");
    }
    return setFile(seleted);
  }

  // Handleling the loader for a better UX
  function handleUpload() {
    setLoading(true);
    timerFunc();
  }

  return (
    <InputContainer onClick={handleUpload}>
      <ToolTip tip="Click To Upload New Profile Pic">
        <UploadButton disabled={loading}>
          {loading ? <LoadingImg src={Loader} /> : `Upload`}
        </UploadButton>
      </ToolTip>
      <FileInput
        type="file"
        ref={fileInput}
        onChange={handleFileInput}
        className="Activity_Icons_Photo"
      />
    </InputContainer>
  );
}

export default FileUploaderWithCropper;
