import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

//Icon Img Imports
import Video from "../../../Assets/images/youtube.png";
import { themeSelector } from "../../../Redux/theme/theme.selector";

// Styled Import
import {
  VideoContainer,
  VideoContent,
  VideoIcon,
  VideoTextContainer,
  VideoText,
} from "./VideoStyles";

function Videos() {
  let { light } = useSelector(themeSelector);
  return (
    <Link to="/videos">
      <VideoContainer light={light}>
        <VideoContent>
          <VideoIcon src={Video} />
        </VideoContent>
        <VideoTextContainer>
          <VideoText light={light}>Videos</VideoText>
        </VideoTextContainer>
      </VideoContainer>
    </Link>
  );
}

export default Videos;
