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
        <TimelineNavigation light={light ? "true" : "false"} to="/">
          Timeline
        </TimelineNavigation>
        <TimelineNavigation light={light ? "true" : "false"} to="/">
          About
        </TimelineNavigation>
        <TimelineNavigation light={light ? "true" : "false"} to="/">
          Freinds
        </TimelineNavigation>
        <TimelineNavigation light={light ? "true" : "false"} to="/">
          Photo
        </TimelineNavigation>
        <TimelineNavigation light={light ? "true" : "false"} to="/">
          Archive
        </TimelineNavigation>
        <TimelineNavigation light={light ? "true" : "false"} to="/">
          More
        </TimelineNavigation>
        <TimelineNavigation light={light ? "true" : "false"} to="/">
          <span>Edit Profile</span>
        </TimelineNavigation>
        <TimelineNavigation light={light ? "true" : "false"} to="/">
          <span>I</span>
        </TimelineNavigation>
        <TimelineNavigation light={light ? "true" : "false"} to="/">
          <span>Search</span>
        </TimelineNavigation>
        <TimelineNavigation light={light ? "true" : "false"} to="/">
          <span>...</span>
        </TimelineNavigation>
      </TimelineContent>
    </TimelineCntr>
  );
}

export default withRouter(UserTimeline);
