import React from "react";
import "./CommentsContainer.styles.scss";
import Logo from "../../../Assets/images/fakebookBlack.png";

function CommentsContainer() {
  return (
    <div className="All_Comments_Container">
      <p>View 4 more comments</p>
      <div className="Individual_Comment_Container">
        <div className="Comments_Cotent">
          <img
            className="UserProfilePic"
            src={Logo}
            alt="Creator Profile Pic"
          />
          <div className="Comment">
            <p className="Person">Person Name</p>
            <p className="Person_Comment">
              Yoo This Is Cool Bro.Yoo This Is Cool Bro.Yoo This Is Cool Bro...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentsContainer;
