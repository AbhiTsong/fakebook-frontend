import React from "react";
import "./UserFriends.styles.scss";
import Pic from "../../../../Assets/images/person-2.jpg";

function UserFriends() {
  return (
    <div className="User_Friends_Container">
      <div className="Title_Container">
        <h4 className="Header">Photos</h4>
        <h5 className="Header">See All</h5>
      </div>
      <div className="User_Friends_Pic_Container">
        {[...Array(9).keys()].map((pic) => (
          <div className="Friends_Content">
            <img className="Friends_Profile_Pic" src={Pic} alt="Pic Posts" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserFriends;
