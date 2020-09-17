import React, { useState, useEffect } from "react";
import "./UserPhotoAndFriends.styles.scss";

// Nested Component Import
import UserIntro from "./UserIntro/UserIntro.Component";
import UserPhotoPosts from "../../sharedComponents/UserPhotoPosts/UserPhotoPosts.component";
import UserFriends from "./UserFriends/UserFriends.component";

// Custom Hook

function UserPhotoAndFreiends() {
  let [scrollPos, setScrollPos] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      let topPos = window.pageYOffset <= 790;
      if (topPos === false) {
        setScrollPos(false);
      } else {
        setScrollPos(true);
      }

      return () => {
        window.removeEventListener("scroll");
      };
    });
  }, []);

  return (
    <div className="User_Creates_Photos_Container">
      <div className="User_Created_Photos_Relative">
        <UserIntro />
        <div className={scrollPos ? "" : "User_Photo_Sticky"}>
          <UserPhotoPosts />
          <UserFriends />
        </div>
      </div>
    </div>
  );
}

export default UserPhotoAndFreiends;
