import React from "react";
import "./AddComment.styles.scss";
import { useSelector, useDispatch } from "react-redux";
import config from "../../../config/config.json";

// Redux Import
import { signInSelector } from "../../../Redux/Auth/SignIn/SignIn.Selector";
import { addCommentAction } from "../../../Redux/Post/commentAction";

// Shared Components
import FormInput from "../../sharedComponents/FormInput/FormInput.Component";

// Custom Hook
import { useForm } from "../../../hooks/useFormInput";

// Default Profile Pic
import Default from "../../../Assets/images/default.png";

function AddComment({ id }) {
  const dispatch = useDispatch();

  let {
    user: { firstName, lastName, _id, hasAvatar },
  } = useSelector(signInSelector);
  const [values, handleValues] = useForm({ comment: "" });

  function handleKeyPress(e) {
    if (e.charCode === 13 && values.comment.length < 3) {
      alert("You can't add a blank comment");
    }

    if (values.comment.length > 3 && e.charCode === 13) {
      dispatch(
        addCommentAction({
          comment: values.comment,
          id,
          userId: _id,
          name: `${firstName} ${lastName}`,
        })
      );
    }
  }

  return (
    <div className="Add_Comment">
      <img
        className="LoggedIn_User"
        src={hasAvatar ? `${config.serverURL}/users/${_id}/avatar` : Default}
        alt="Creator Profile Pic"
      />
      <FormInput
        name="comment"
        type="text"
        value={values.comment.split("  ").join(" ")}
        placeholder={`Add Comments ${firstName}....`}
        onChange={handleValues}
        className="Comment_Input"
        onKeyPress={handleKeyPress}
      />
    </div>
  );
}

export default AddComment;
