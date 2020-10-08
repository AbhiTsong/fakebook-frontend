import React from "react";
// import { useDispatch, useSelector } from "react-redux";
import "./SeeProfile.styles.scss";
import useCheckProfilePic from "../../../hooks/useCheckProfilePic";
import config from "../../../config/config.json";

// Shared Components
import HorizontalLine from "../../sharedComponents/HorizontalLine/HorizontalLine";

// Image Import
import Default from "../../../Assets/images/default.png";
import Feedback from "../../../Assets/images/feedback.png";
import Right from "../../../Assets/images/rightArrow.png";
import Settings from "../../../Assets/images/settings.png";
import Questionmark from "../../../Assets/images/questionmark.png";
import Moon from "../../../Assets/images/moon.png";
import LeftArrow from "../../../Assets/images/leftArrow.png";
import Logout from "../../../Assets/images/logout.png"

function SeeProfile({ user }) {
  const {
    user: { _id, firstName, lastName },
  } = user;
  const [isProfilePic] = useCheckProfilePic(_id);
  return (
    <div className="Profile_Settings_Container">
      <div className="Profile_Settings_Header">
        <div className="Profile_Pic_Container">
          <img
            alt="Logged In User"
            className="Profie_Pic"
            src={
              !isProfilePic
                ? Default
                : `${config.serverURL}/users/${_id}/avatar`
            }
          />
        </div>
        <div className="Profile_Name_Container">
          <h5 className="Profile_Name">{`${firstName} ${lastName}`}</h5>
          <h6 className="Profile_Utility">See Your Profile</h6>
        </div>
      </div>
      <HorizontalLine />
      <div className="Feedback_Container">
        <div className="Feedback_Image_Container">
          <img src={Feedback} alt="Feedback" className="Feedback_Image" />
        </div>
        <div className="Feedback_Text_Container">
          <h5 className="Feeback_Header">Give Feedback</h5>
          <h6 className="Feedback_Text">Help Me Improve This Project</h6>
        </div>
      </div>
      <HorizontalLine />
      <div className="Settings_And_Privacy">
        <div className="Settings_Left_Container">
          <div className="Settings_Container">
            <img alt="" src={Settings} className="Settings_Image" />
          </div>
          <h5 className="Settings_Text">Settings And Privacy</h5>
        </div>
        <div className="Arrow_container">
          <img className="Right_Arrow" src={Right} alt="Right_Arrow" />
        </div>
      </div>

      <div className="Settings_And_Privacy">
        <div className="Settings_Left_Container">
          <div className="Settings_Container">
            <img alt="" src={Questionmark} className="Settings_Image" />
          </div>
          <h5 className="Settings_Text">Help And Support</h5>
        </div>
        <div className="Arrow_container">
          <img className="Right_Arrow" src={Right} alt="Right_Arrow" />
        </div>
      </div>

      <div className="Settings_And_Privacy">
        <div className="Settings_Left_Container">
          <div className="Settings_Container">
            <img alt="" src={Moon} className="Settings_Image" />
          </div>
          <h5 className="Settings_Text">Dark Mode</h5>
        </div>
        <div className="Arrow_container">
          <img className="Right_Arrow" src={Right} alt="Right_Arrow" />
        </div>
      </div>

      <div className="Settings_And_Privacy">
        <div className="Settings_Left_Container">
          <div className="Settings_Container">
            <img alt="" src={LeftArrow} className="Settings_Image" />
          </div>
          <h5 className="Settings_Text">Switch To Classic Facebook</h5>
        </div>
      </div>

      <div className="Settings_And_Privacy">
        <div className="Settings_Left_Container">
          <div className="Settings_Container">
            <img alt="" src={Logout} className="Settings_Image" />
          </div>
          <h5 className="Settings_Text">Logout</h5>
        </div>
      </div>
    </div>
  );
}

export default SeeProfile;
