import React from "react";

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
  let { value, onChange } = props;

  return (
    <>
      <StyledFormInput
        name="description"
        placeholder="What is on your mind, Abhi??"
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
