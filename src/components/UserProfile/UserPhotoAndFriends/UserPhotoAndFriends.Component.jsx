import React, { useState, useEffect } from "react";

// Styled Imports
import {
  UserCreatedPostContr,
  UserPhotoSticky,
  LeftPostsCntr,
} from "./UserPhotoAndFriends.styles";

// Nested Component Import
import UserIntro from "./UserIntro/UserIntro.Component";
import UserPhotoPosts from "../../sharedComponents/UserPhotoPosts/UserPhotoPosts.component";
import UserFriends from "./UserFriends/UserFriends.component";

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
    <UserCreatedPostContr>
      <LeftPostsCntr>
        <UserIntro />

        <UserPhotoPosts />
        <UserFriends />

        {/* <UserPhotoSticky scrollPos>
              <UserPhotoPosts />
              <UserFriends />
            </UserPhotoSticky> */}
      </LeftPostsCntr>
    </UserCreatedPostContr>
  );
}

export default UserPhotoAndFreiends;
