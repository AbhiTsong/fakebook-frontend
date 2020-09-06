import React from "react";
import "./UserTimeline.styles.scss";
import { NavLink, withRouter } from "react-router-dom";

function UserTimeline() {
  return (
    <div className="TimeLine_Container">
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
  );
}

export default withRouter(UserTimeline);
