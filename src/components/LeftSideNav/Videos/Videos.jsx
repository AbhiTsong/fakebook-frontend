import React from "react";

//Icon Img Imports
import Video from "../../../Assets/images/youtube.png";

// Styled Import
import {
  VideoContainer,
  VideoContent,
  VideoIcon,
  VideoTextContainer,
  VideoText,
} from "./VideoStyles";

function Videos() {
  return (
    <VideoContainer>
      <VideoContent>
        <VideoIcon src={Video} />
      </VideoContent>
      <VideoTextContainer>
        <VideoText> Videos</VideoText>
      </VideoTextContainer>
    </VideoContainer>
  );
}

export default Videos;
