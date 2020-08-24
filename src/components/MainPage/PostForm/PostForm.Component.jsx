import React from "react";
import "./PostForm.Styles.scss";

// Child Components
import HorizontalLine from "../../sharedComponents/HorizontalLine/HorizontalLine";
import LOgo from "../../../Assets/images/IMG-20190106-WA0001.jpg";

function PostFormComponent() {
  return (
    <div className="FormConatiner">
      <div className="Image_Input_Container">
        <img className="UserProfilePic" src={LOgo} alt="User Pic" />
        <form>
          <input className="Post_Form" type="text" />
        </form>
      </div>
      <HorizontalLine />
    </div>
  );
}

export default PostFormComponent;

// 1F604 smile
// &#127909; live video
//  &#128248; camera
