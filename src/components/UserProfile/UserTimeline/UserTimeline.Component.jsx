import React from "react";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { themeSelector } from "../../../Redux/theme/theme.selector";

// styled imports
import {
  TimelineCntr,
  TimelineContent,
  TimelineNavigation,
  TimelineText,
} from "./UserTimeline.styles";

function UserTimeline() {
  let { light } = useSelector(themeSelector);

  // User Profie Pic Should Appear
  return (
    <TimelineCntr light={light}>
      <TimelineContent>
        <TimelineNavigation to="/home">
          <TimelineText light={light}>Timeline</TimelineText>
        </TimelineNavigation>
        <TimelineNavigation to="/home">
          <TimelineText light={light}>About</TimelineText>
        </TimelineNavigation>
        <TimelineNavigation to="/home">
          <TimelineText light={light}>Freinds</TimelineText>
        </TimelineNavigation>
        <TimelineNavigation to="/home">
          <TimelineText light={light}>Photo</TimelineText>
        </TimelineNavigation>
        <TimelineNavigation to="/home">
          <TimelineText light={light}>Archive</TimelineText>
        </TimelineNavigation>
        <TimelineNavigation to="/home">
          <TimelineText light={light}>More</TimelineText>
        </TimelineNavigation>
        <TimelineNavigation to="/home">
          <TimelineText light={light}>Edit Profile</TimelineText>
        </TimelineNavigation>
        <TimelineNavigation to="/home">
          <TimelineText light={light}> I</TimelineText>
        </TimelineNavigation>
        <TimelineNavigation to="/home">
          <TimelineText light={light}> Search</TimelineText>
        </TimelineNavigation>
        <TimelineNavigation to="/home">
          <TimelineText light={light}>...</TimelineText>
        </TimelineNavigation>
      </TimelineContent>
    </TimelineCntr>
  );
}

export default withRouter(UserTimeline);
