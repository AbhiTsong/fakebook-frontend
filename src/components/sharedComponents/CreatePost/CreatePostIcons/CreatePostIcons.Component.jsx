import React from "react";

import { AddPostContainer } from "./CreatePostIcon.styles";

function CreatePostIcons() {
  return (
    <AddPostContainer>
      <span>Add to your post</span>
      <span>
        <i>1</i>
        <i>2</i>
        <i>3</i>
        <i>4</i>
        <i>5</i>
        <i>...</i>
      </span>
    </AddPostContainer>
  );
}

export default CreatePostIcons;
