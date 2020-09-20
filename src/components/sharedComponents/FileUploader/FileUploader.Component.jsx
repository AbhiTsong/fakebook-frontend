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

// Icon Pic Import 
import Camera from "../../../Assets/images/camera.png"

const FileUploader = (props) => {
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
    <div className="Input_Container">
     
     <img className="Icon_Content" src={Camera} alt="Camera"/>
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
