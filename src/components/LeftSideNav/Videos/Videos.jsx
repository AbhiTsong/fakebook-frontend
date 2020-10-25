import React from "react";
import { Link } from "react-router-dom";

//Icon Img Imports
import Video from "../../../Assets/images/youtube.png";
import { useCalcInnerWidth } from "../../../hooks/useCalcInnerWidth";

// Styled Import
import {
  VideoContainer,
  VideoContent,
  VideoIcon,
  VideoTextContainer,
  VideoText,
} from "./VideoStyles";

function Videos() {
  let width = useCalcInnerWidth(window.innerWidth);
  return (
    <Link to="/videos">
      <VideoContainer width={width}>
        <VideoContent>
          <VideoIcon width={width} src={Video} />
        </VideoContent>
        <VideoTextContainer>
          <VideoText> Videos</VideoText>
        </VideoTextContainer>
      </VideoContainer>
    </Link>
  );
}

export default Videos;
