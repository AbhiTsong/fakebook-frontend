import React from "react";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { themeSelector } from "../../../Redux/theme/theme.selector";

// styled imports
import {
  TimelineCntr,
  TimelineContent,
  TimelineNavigation,
} from "./UserTimeline.styles";

function UserTimeline() {
  let { light } = useSelector(themeSelector);
  // User Profie Pic Should Appear
  return (
    <TimelineCntr light={light}>
      <TimelineContent>
        <TimelineNavigation to="/">Timeline</TimelineNavigation>
        <TimelineNavigation to="/">About</TimelineNavigation>
        <TimelineNavigation to="/">Freinds</TimelineNavigation>
        <TimelineNavigation to="/">Photo</TimelineNavigation>
        <TimelineNavigation to="/">Archive</TimelineNavigation>
        <TimelineNavigation to="/">More</TimelineNavigation>
        <TimelineNavigation to="/">
          <span>Edit Profile</span>
        </TimelineNavigation>
        <TimelineNavigation light={light} to="/">
          <span>I</span>
        </TimelineNavigation>
        <TimelineNavigation light={light} to="/">
          <span>Search</span>
        </TimelineNavigation>
        <TimelineNavigation light={light} to="/">
          <span>...</span>
        </TimelineNavigation>
      </TimelineContent>
    </TimelineCntr>
  );
}

export default withRouter(UserTimeline);
