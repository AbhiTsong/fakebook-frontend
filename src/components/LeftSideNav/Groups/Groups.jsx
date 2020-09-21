import React from "react";
import "./Groups.styles.scss";

// Logo Img Import
import Group from ".././../../Assets/images/group.png";

function Groups() {
  return (
    <div className="Groups_Container">
      <div className="Groups_Content">
        <img src={Group} alt="Groups Icons" className="Groups_Icon" />
      </div>
      <div className="Group_Text_Container">
        <h5 className="Group_Text">Groups</h5>
      </div>
    </div>
  );
}

export default Groups;
