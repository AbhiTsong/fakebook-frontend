import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import "./UserTimeline.styles.scss";

// Custom Hook
import useScrollPosition from "../../../hooks/useScrollPosition";

function UserTimeline() {
  // setTimeout(() => {})
  let [scrollPos] = useScrollPosition(true, 494);


  return (
    <div className="Timeline_Container">
      <div className={scrollPos ? "TimeLine_Content" : "TimeLine_Fixed"}>
        <NavLink className="TimeLine_Navigation" to="/">
          Timeline
        </NavLink>
        <NavLink className="TimeLine_Navigation" to="/">
          About
        </NavLink>
        <NavLink className="TimeLine_Navigation" to="/">
          Freinds
        </NavLink>
        <NavLink className="TimeLine_Navigation" to="/">
          Photo
        </NavLink>
        <NavLink className="TimeLine_Navigation" to="/">
          Archive
        </NavLink>
        <NavLink className="TimeLine_Navigation" to="/">
          More
        </NavLink>
        <div className="TimeLine_Navigation">
          <span>Edit Profile</span>
        </div>
        <div className="TimeLine_Navigation">
          <span>I</span>
        </div>
        <div className="TimeLine_Navigation">
          <span>Search</span>
        </div>
        <div className="TimeLine_Navigation">
          <span>...</span>
        </div>
      </div>
    </div>
  );
}

export default withRouter(UserTimeline);
