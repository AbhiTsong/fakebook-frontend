import React, { useRef, useEffect, useState } from "react";

// Redux Imports
import { useDispatch, useSelector } from "react-redux";
import { getImagePath } from "../../../Redux/Post/photoPath.action";

// Shared Component
import { ShowModal, CloseModal } from "../../../Redux/Modal/ModalAction";

// utility import
import { readFileSize } from "../../../utility/readURI";

function FileUploaderWithCropper() {
  let fileInput = useRef();
  const dispatch = useDispatch();
  let [file, setFile] = useState("");
  let [imgURL, setURL] = useState("");

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    file ? dispatch(CloseModal()) : ""; //Closing the model before a new componenet is mounted

    if (file !== "" && imgURL !== null) {
      dispatch(ShowModal("ADD_NEW_PROFILE_PIC"));
      dispatch(getImagePath([imgURL, file]));
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
    readFileSize(e);
    readURI(e);
    const seleted = e.target.files[0];
    //
    // seleted === undefined ? setURL(null) : "";
    if (seleted && seleted.size > 1048576) {
      return setFile("");
    }
    return setFile(seleted);
  }

  return (
    <div>
      <input
        type="file"
        ref={fileInput}
        onChange={handleFileInput}
        className="Activity_Icons_Photo"
      />
    </div>
  );
}

export default FileUploaderWithCropper;
