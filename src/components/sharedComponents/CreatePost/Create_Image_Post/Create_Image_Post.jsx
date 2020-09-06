import React from "react";
import "./Create_Image_Styles.scss";

// // Custom Hook Import
// import { useForm } from "../../../../hooks/useFormInput";

// Custom Component
import RemoveImage from "./RemoveImage/RemoveImage.Component";

// Shared Componet Import
import FormInput from "../../../sharedComponents/FormInput/FormInput.Component";

const WORD_LIMIT = 100;

function CreateImagePost(props) {
  let { value, onChange } = props;

  return (
    <>
      <FormInput
        name="description"
        placeholder="What is on your mind, Abhi??"
        type="text"
        value={value}
        onChange={onChange}
        maxLength={WORD_LIMIT}
        className="Photo_Description"
      />
      <div className="Pic_Preview_Container">
        <RemoveImage />
        <img className="Post_Pic" src={props.path[0]} alt="File To Upload" />
      </div>
    </>
  );
}

export default CreateImagePost;
