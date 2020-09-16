import React, { useRef, useState, useEffect } from "react";
import "./ChangeCover.styles.scss";
import { useDispatch } from "react-redux";

// Redux Import
import { ShowModal } from "../../../Redux/Modal/ModalAction";
import { getCoverPath } from "../../../Redux/User/getCoverPath";

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
}

export default ChangeCover;
