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
import { useSelector } from "react-redux";

// Redux Import
import { themeSelector } from "../../../../Redux/theme/theme.selector";

function PhotoPost(props) {
  let { post } = props;
  let { light } = useSelector(themeSelector);

  return (
    <>
      {post.description ? (
        <PosDescription light={light}>{post.description}</PosDescription>
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
