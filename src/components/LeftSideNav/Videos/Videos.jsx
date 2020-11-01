import React from "react";
import { Link } from "react-router-dom";

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
    <Link to="/videos">
      <VideoContainer>
        <VideoContent>
          <VideoIcon src={Video} />
        </VideoContent>
        <VideoTextContainer>
          <VideoText>Videos</VideoText>
        </VideoTextContainer>
      </VideoContainer>
    </Link>
  );
}

export default Videos;
