import React from "react";
import "./PostPhoto.Styles.scss";

// Utility Imports
import { bufferToBase64 } from "../../../../utility/bufferToBase64";

function PhotoPost(props) {
  let { post } = props;

  // console.log("descripton  ", post.description );

  return (
    <>
      {post.description ? <h5 className="Post_Text">{post.description}</h5> : null}
      <div className="Center_Post_Pic">
        <div
          className="Center_Post_Pic_Background"
          style={{
            backgroundImage: `url(data:image/png;base64,${bufferToBase64(
              post.photo.data
            )})`,
          }}
        />
        <img
          alt="Post Pic"
          className="Single_Post_Photo"
          src={`data:image/png;base64,${bufferToBase64(post.photo.data)}`}
        />
      </div>
    </>
  );
}

export default PhotoPost;
