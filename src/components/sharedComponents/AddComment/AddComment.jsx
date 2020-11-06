import React from "react";
import { useSelector, useDispatch } from "react-redux";
import config from "../../../config/config.json";

// Styled Imports
import {
  CommentsContainer,
  ImageContr,
  StyledFormInput,
} from "./AddComment.style";

// Redux Import
import { signInSelector } from "../../../Redux/Auth/SignIn/SignIn.Selector";
import { addCommentAction } from "../../../Redux/Post/commentAction";
import { themeSelector } from "../../../Redux/theme/theme.selector";

// Shared Components
import UserProfilePic from "../UserProfilePic/UserProfilePic";

// Custom Hook
import { useForm } from "../../../hooks/useFormInput";

// Default Profile Pic
import Default from "../../../Assets/images/default.png";

function AddComment({ id }) {
  const dispatch = useDispatch();
  const { light } = useSelector(themeSelector);

  let currUsr = useSelector(signInSelector);
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
          userId: currUsr.user._id,
          name: `${currUsr.user.firstName} ${currUsr.user.lastName}`,
        })
      );
    }
  }

  return (
    <CommentsContainer>
      <ImageContr>
        <UserProfilePic />
      </ImageContr>
      <StyledFormInput
        light={light}
        name="comment"
        type="text"
        value={values.comment.split("  ").join(" ")}
        placeholder={`Add Comment ${currUsr.user.firstName}....`}
        onChange={handleValues}
        onKeyPress={handleKeyPress}
      />
    </CommentsContainer>
  );
}

export default AddComment;
