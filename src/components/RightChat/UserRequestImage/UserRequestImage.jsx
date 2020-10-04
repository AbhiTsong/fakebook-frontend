import React from "react";
import useCheckProfilePic from "../../../hooks/useCheckProfilePic";
import Default from "../../../Assets/images/default.png";
import config from "../../../config/config.json";
import "./UserRequestImage.styles.scss";
import HorizontalLine from "../../sharedComponents/HorizontalLine/HorizontalLine";

function UserRequestImage({ userImg }) {
  // console.log("userImg", userImg[0])
  const [isProfilePic] = useCheckProfilePic(userImg[0].owner);
  return (
    <div className="Request_Container">
      <div className="Request_Content">
        <div className="Request_Img_Container">
          <img
            src={
              !isProfilePic
                ? Default
                : `${config.serverURL}/users/${userImg[0].owner}/avatar`
            }
            alt="User Profile"
            className="Request_Img"
          />
        </div>
        <div className="Request_Name">
          <h5 className="Request_Name_Text">{userImg[0].name}</h5>
        </div>
      </div>
      <div className="Request_Button_Container">
        <button onClick={() => console.log("I got clicked")} className="Accept_Request"> Confirm</button>
        <button onClick={() => console.log("I got clicked")} className="Delete_Request"> Delete</button>
      </div>
      <HorizontalLine />
    </div>
  );
}

export default UserRequestImage;
