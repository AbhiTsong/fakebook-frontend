import React from "react";
import "./UserPhotoPosts.styles.scss";
import Pic from "../../../Assets/images/person-1.jpg";

function UserPhotoPosts() {
  return (
    <div className="User_Photo_Posts">
      <div className="Title_Container">
        <h4 className="Header">Photos</h4>
        <h5 className="Header">See All</h5>
      </div>
      <div className="Image_Post_Container">
        {[...Array(9).keys()].map((pic, idx) => (
          <div key={pic + idx} className="Image_Post_Content">
            <img className="Image_Post" src={Pic} alt="Pic Posts" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserPhotoPosts;
