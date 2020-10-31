import React from "react";
import { withRouter } from "react-router-dom";

// styled imports
import {
  TimelineCntr,
  TimelineContent,
  TimelineNavigation,
} from "./UserTimeline.styles";

function UserTimeline() {
  // User Profie Pic Should Appear
  return (
    <TimelineCntr>
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
        <TimelineNavigation to="/">
          <span>I</span>
        </TimelineNavigation>
        <TimelineNavigation to="/">
          <span>Search</span>
        </TimelineNavigation>
        <TimelineNavigation to="/">
          <span>...</span>
        </TimelineNavigation>
      </TimelineContent>
    </TimelineCntr>
  );
}

export default withRouter(UserTimeline);
