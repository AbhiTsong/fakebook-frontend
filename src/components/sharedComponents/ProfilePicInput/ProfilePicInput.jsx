import React, { useRef, useEffect, useState } from "react";

// Styled Imports
import {
  InputContainer,
  UploadButton,
  FileInput,
} from "./ProfilePic.Input.styles";

// Redux Imports
import { useDispatch } from "react-redux";
import { getProfilePath } from "../../../Redux/User/userpProfilePathAction";

// Shared Component
import { ShowModal } from "../../../Redux/Modal/ModalAction";

// utility import
import { readFileSize } from "../../../utility/readURI";

function FileUploaderWithCropper() {
  let fileInput = useRef();
  const dispatch = useDispatch();
  let [file, setFile] = useState("");
  let [imgURL, setURL] = useState("");

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

  return (
    <InputContainer>
      <UploadButton>Upload</UploadButton>
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
