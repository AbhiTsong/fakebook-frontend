import React from "react";
import "./AddComment.styles.scss";
import { useSelector, useDispatch } from "react-redux";
import config from "../../../config/config.json";

// Redux Import
import { currentUser } from "../../../Redux/Auth/SignIn/SignIn.Selector";
import { addCommentAction } from "../../../Redux/Post/commentAction";

// Shared Components
import FormInput from "../../sharedComponents/FormInput/FormInput.Component";

// Custom Hook
import { useForm } from "../../../hooks/useFormInput";

function AddComment({ id }) {
  const dispatch = useDispatch();
  const [values, handleValues] = useForm({ comment: "" });

  let {
    user: { firstName, lastName, _id },
  } = useSelector(currentUser);

  function handleKeyPress(e) {
    if (e.charCode === 13) {
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
        src={`${config.serverURL}/users/${_id}/avatar`}
        alt="Creator Profile Pic"
      />
      <FormInput
        name="comment"
        type="text"
        value={values.comment}
        placeholder={`Add Comments ${firstName}....`}
        onChange={handleValues}
        className="Comment_Input"
        onKeyPress={handleKeyPress}
      />
    </div>
  );
}

export default AddComment;
