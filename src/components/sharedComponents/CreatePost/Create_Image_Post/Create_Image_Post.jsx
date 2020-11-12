import React from "react";
import { useSelector } from "react-redux";

// Redux Import
import { signInSelector } from "../../../../Redux/Auth/SignIn/SignIn.Selector";
import { themeSelector } from "../../../../Redux/theme/theme.selector";

// styled imports
import {
  StyledFormInput,
  PicRreviewContainer,
  PicPreviewImg,
} from "./CreateImage.Styles";

// Custom Component
import RemoveImage from "./RemoveImage/RemoveImage.Component";

const WORD_LIMIT = 100;

function CreateImagePost(props) {
  let { light } = useSelector(themeSelector);
  let { value, onChange } = props;
  let {
    user: { firstName },
  } = useSelector(signInSelector);

  return (
    <>
      <StyledFormInput
        light={light}
        name="description"
        placeholder={`What is on your mind, ${firstName}??`}
        type="text"
        value={value}
        onChange={onChange}
        maxLength={WORD_LIMIT}
        className="Photo_Description"
      />
      <PicRreviewContainer>
        <RemoveImage />
        <PicPreviewImg src={props.path[0]} />
      </PicRreviewContainer>
    </>
  );
}

export default CreateImagePost;
