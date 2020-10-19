import React, { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";

// Styled Imports
import {
  CoverUploadContainer,
  CoverIconContainer,
  CoverIcon,
  CoverInput,
} from "./ChangeCover.Styles";

// Redux Import
import { ShowModal } from "../../../Redux/Modal/ModalAction";
import { getCoverPath } from "../../../Redux/User/getCoverPath";

// Image Icon Import
import File from "../../../Assets/images/add.png";

function ChangeCover() {
  const dispatch = useDispatch();
  let fileInput = useRef(null);
  let [file, setFile] = useState("");
  let [imgURL, setURL] = useState("");

  useEffect(() => {
    if (file !== "" && imgURL !== null) {
      dispatch(ShowModal("CHANGE_USER_COVER"));
      dispatch(getCoverPath([imgURL, file]));
    }
  }, [dispatch, file, imgURL]);

  // Function For Reading the path of the file user wants to upload
  function readURI(e) {
    if (e.target.files && e.target.files[0]) {
      if (e.target.files[0].size > 1048576) {
        alert(
          "Currently The Website Is Only Accepting File Size Lesser Than 1MB"
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
    if (seleted && seleted.size > 1048576) {
      return setFile("");
    }
    return setFile(seleted);
  };
  return (
    <CoverUploadContainer>
      <CoverIconContainer>
        <CoverIcon src={File} alt="Cover Icon" />
      </CoverIconContainer>

      <CoverInput
        type="file"
        ref={fileInput}
        onChange={handleFileInput}
        className="Cover_File_Input"
      />
    </CoverUploadContainer>
  );
}

export default ChangeCover;
