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
        <TimelineNavigation light={light} to="/">
          Timeline
        </TimelineNavigation>
        <TimelineNavigation light={light} to="/">
          About
        </TimelineNavigation>
        <TimelineNavigation light={light} to="/">
          Freinds
        </TimelineNavigation>
        <TimelineNavigation light={light} to="/">
          Photo
        </TimelineNavigation>
        <TimelineNavigation light={light} to="/">
          Archive
        </TimelineNavigation>
        <TimelineNavigation light={light} to="/">
          More
        </TimelineNavigation>
        <TimelineNavigation light={light} to="/">
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
