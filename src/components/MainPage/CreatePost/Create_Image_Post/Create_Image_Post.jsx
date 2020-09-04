import React from "react";
import "./Create_Image_Styles.scss";

// Custom Hook Import
import { useForm } from "../../../../hooks/useFormInput";

// Custom Component
import RemoveImage from "./RemoveImage/RemoveImage.Component";

// Shared Componet Import
import FormInput from "../../../sharedComponents/FormInput/FormInput.Component";

// Utility Import
import { WORD_LIMIT } from "../utility";

function CreateImagePost(props) {
  const [values, setValues] = useForm({ description: "" });

  return (
    <>
      <FormInput
        name="description"
        placeholder="What is on your mind, Abhi??"
        type="text"
        value={values.description.split("  ").join(" ")}
        onChange={setValues}
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
