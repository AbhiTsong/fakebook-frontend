/* eslint-disable no-unused-expressions */
// Npm Modul Imports
import React, { useRef, useState, useEffect } from "react";
import "./FileUploader.styles.scss";
import { useDispatch } from "react-redux";

// Redux Import
import { getImagePath } from "../../../Redux/Post/photoPath.action";
import { ShowModal } from "../../../Redux/Modal/ModalAction";

// // Custom Hook
// import { readURI } from "../../../utility/readURI";

const FileUploader = (props) => {
  console.log(props);
  let dispatch = useDispatch();
  const fileInput = useRef(null);
  let [file, setFile] = useState("");
  let [imgURL, setURL] = useState("");
  // let [setURL] = useReadURI();

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
    <div className="Input_Container">
      <span className="Text" role="img" aria-label="Live Video">
        &#128248;
        <span className="Activity_Text">Photo/Video</span>
      </span>
      <input
        type="file"
        ref={fileInput}
        onChange={handleFileInput}
        className="Activity_Icons_Photo"
      />
    </div>
  );
};

export default FileUploader;
