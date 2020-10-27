import React, { useState, useEffect } from "react";

// Styled Imports
import {
  UserCreatedPostContr,
  UserPhotoSticky,
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
        <div>
          <UserIntro />
          {scrollPos ? (
            <div>
              {" "}
              <UserPhotoPosts />
              <UserFriends />
            </div>
          ) : (
            <UserPhotoSticky scrollPos>
              <UserPhotoPosts />
              <UserFriends />
            </UserPhotoSticky>
          )}
        </div>
      </UserCreatedPostContr>
    
  );
}

export default UserPhotoAndFreiends;
