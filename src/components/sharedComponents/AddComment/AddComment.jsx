import React from "react";
import "./AddComment.styles.scss";
import { useSelector, useDispatch } from "react-redux";
import config from "../../../config/config.json";

// Redux Import
import { currentUser } from "../../../Redux/Auth/SignIn/SignIn.Selector";
import { updatePostAction } from "../../../Redux/Post/updatePostAction";

// Shared Components
import FormInput from "../../sharedComponents/FormInput/FormInput.Component";

// Custom Hook
import { useForm } from "../../../hooks/useFormInput";

function AddComment({ id }) {
  const dispatch = useDispatch();
  const [values, handleValues] = useForm({ comment: "" });

  let {
    user: { firstName, _id },
  } = useSelector(currentUser);

  function handleKeyPress(e) {
    if (e.charCode === 13) {
      console.log("Yoo key down");
      dispatch(updatePostAction({ comment: values.comment, id }));
    }
  }

  return (
    <div className="Add_Comment">
      <img
        className="LoggedIn_User"
        src={`${config.serverURL}/users/${_id}/avatar`}
        alt="Creator Profile Pic"
      />
      <FormInput
        name="comment"
        type="text"
        value={values.comment}
        placeholder={`Add Comments ${firstName}`}
        onChange={handleValues}
        className="Comment_Input"
        onKeyPress={handleKeyPress}
      />
    </div>
  );
}

export default AddComment;
