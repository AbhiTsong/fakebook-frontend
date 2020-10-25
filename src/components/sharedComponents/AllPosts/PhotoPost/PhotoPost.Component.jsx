import React from "react";
import { useCalcInnerWidth } from "../../../../hooks/useCalcInnerWidth";

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
  const width = useCalcInnerWidth(window.innerWidth);

  return (
    <>
      {post.description ? (
        <PosDescription>{post.description}</PosDescription>
      ) : null}
      <CenterPostPic width={width}>
        <CenterPostPicBack
          width={width}
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
