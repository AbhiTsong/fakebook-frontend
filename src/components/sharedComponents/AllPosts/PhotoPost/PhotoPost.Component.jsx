import React from "react";

// Styled Imports
import {
  PosDescription,
  CenterPostPic,
  CenterPostPicBack,
  SinglePostPhoto,
} from "./PhotoPost.styles";

// Utility Imports
import { bufferToBase64 } from "../../../../utility/bufferToBase64";

function PhotoPost(props) {
  let { post } = props;

  return (
    <>
      {post.description ? (
        <PosDescription>{post.description}</PosDescription>
      ) : null}
      <CenterPostPic>
        <CenterPostPicBack
          style={{
            backgroundImage: `url(data:image/png;base64,${bufferToBase64(
              post.photo.data
            )})`,
          }}
        />
        <SinglePostPhoto
          src={`data:image/png;base64,${bufferToBase64(post.photo.data)}`}
        />
      </CenterPostPic>
    </>
  );
}

export default PhotoPost;
