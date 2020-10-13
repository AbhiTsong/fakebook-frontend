import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./SeeProfile.styles.scss";
import config from "../../../config/config.json";
import { Link, withRouter } from "react-router-dom";

// Redux Imports
import { showToster } from "../../../Redux/toster/toster.action";
import { selectTheme } from "../../../Redux/theme/theme.action";

// Shared Components
import HorizontalLine from "../../sharedComponents/HorizontalLine/HorizontalLine";
import { SignoutSelector } from "../../../Redux/Auth/SignOut/signout.selector";

// Image Import
import Default from "../../../Assets/images/default.png";
import Feedback from "../../../Assets/images/feedback.png";
import Right from "../../../Assets/images/rightArrow.png";
import Settings from "../../../Assets/images/settings.png";
import Questionmark from "../../../Assets/images/questionmark.png";
import Moon from "../../../Assets/images/moon.png";
import LeftArrow from "../../../Assets/images/leftArrow.png";
import Logout from "../../../Assets/images/logout.png";
import { SignOutAction } from "../../../Redux/Auth/SignOut/SignOut.Actions";

function SeeProfile(props) {
  const [theme, setTheme] = useState(false);
  const signOutState = useSelector(SignoutSelector);

  const {
    user: { _id, firstName, lastName, hasAvatar },
  } = props.user;
  const dispatch = useDispatch();

  function staticToast() {
    dispatch(showToster("This Fetaure Is Under Development"));
  }

  // Dark Mode And Light Mode Toggle
  function selectThemeFunc() {
    setTheme(!theme);
    dispatch(selectTheme());
  }

  //Handle Classic Facebook
  function handleClassic() {
    dispatch(
      showToster(
        "From September 2020 The Classic Look Has Been Officially Removed by Fakebook"
      )
    );
  }

  // Hnadeleing The Logout Function
  function handleLogout() {
    dispatch(SignOutAction());
    // props.history.replace("/auth");
    // props.history.go(0);
  }

  // if (signOutState.loading) {
  //   return "Loading....";
  // }

  return (
    <div className="Profile_Settings_Container">
      <Link to="/profile">
        <div className="Profile_Settings_Header">
          <div className="Profile_Pic_Container">
            <img
              alt="Logged In User"
              className="Profie_Pic"
              src={
                hasAvatar ? `${config.serverURL}/users/${_id}/avatar` : Default
              }
            />
          </div>
          <div className="Profile_Name_Container">
            <h5 className="Profile_Name">{`${firstName} ${lastName}`}</h5>
            <h6 className="Profile_Utility">See Your Profile</h6>
          </div>
        </div>
      </Link>
      <HorizontalLine />
      <div onClick={staticToast} className="Feedback_Container">
        <div className="Feedback_Image_Container">
          <img src={Feedback} alt="Feedback" className="Feedback_Image" />
        </div>
        <div className="Feedback_Text_Container">
          <h5 className="Feeback_Header">Give Feedback</h5>
          <h6 className="Feedback_Text">Help Me Improve This Project</h6>
        </div>
      </div>
      <HorizontalLine />
      <div onClick={staticToast} className="Settings_And_Privacy">
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

      <div onClick={staticToast} className="Settings_And_Privacy">
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
        <div onClick={selectThemeFunc} className="Arrow_container">
          <img className="Right_Arrow" src={Right} alt="Right_Arrow" />
        </div>
      </div>

      <div onClick={handleClassic} className="Settings_And_Privacy">
        <div className="Settings_Left_Container">
          <div className="Settings_Container">
            <img alt="" src={LeftArrow} className="Settings_Image" />
          </div>
          <h5 className="Settings_Text">Switch To Classic Facebook</h5>
        </div>
      </div>

      <div onClick={handleLogout} className="Settings_And_Privacy">
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

export default withRouter(React.memo(SeeProfile));
