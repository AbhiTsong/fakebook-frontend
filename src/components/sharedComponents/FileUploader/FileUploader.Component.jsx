/* eslint-disable no-unused-expressions */
// Npm Modules Imports
import React, { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";

// Styled Imports
import { InputContainer, InputIcon, Input } from "./FileUploader.styles";

// Redux Import
import { getImagePath } from "../../../Redux/Post/photoPath.action";
import { ShowModal } from "../../../Redux/Modal/ModalAction";

// Icon Pic Import
import Camera from "../../../Assets/images/camera.png";

const FileUploader = () => {
  let dispatch = useDispatch();
  const fileInput = useRef(null);
  let [file, setFile] = useState("");
  let [imgURL, setURL] = useState("");

  useEffect(() => {
    if (file !== "" && imgURL !== null) {
      dispatch(ShowModal("CREATE_POST"));
      dispatch(getImagePath([imgURL, file]));
    }
  }, [dispatch, file, imgURL]);

  // Function For Reading the path of the file user wants to upload
  function readURI(e) {
    if (e.target.files && e.target.files[0]) {
      if (e.target.files[0].size > 1048576) {
        alert(
          "Current The Website Is Only Accepting File Size Lesser Than 1MB"
        );
        setURL(null);
      } else {
        let reader = new FileReader();
        reader.onload = function (ev) {
          setURL(ev.target.result);
        };
        reader.readAsDataURL(e.target.files[0]);
      }
    }
  }
  // Handling the file input.
  const handleFileInput = (e) => {
    readURI(e);
    const seleted = e.target.files[0];
    //
    seleted === undefined ? setURL(null) : "";
    if (seleted && seleted.size > 1048576) {
      return setFile("");
    }
    return setFile(seleted);
  };

  return (
    <InputContainer>
      <InputIcon src={Camera} />
      <Input type="file" ref={fileInput} onChange={handleFileInput} />
    </InputContainer>
  );
};

export default FileUploader;
