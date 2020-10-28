import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import config from "../../../config/config.json";
import { Link, withRouter } from "react-router-dom";

// Redux Imports
import { showToster } from "../../../Redux/toster/toster.action";
import { toggleHamburger } from "../../../Redux/Hamburger/Hamburger.action";
import { selectTheme } from "../../../Redux/theme/theme.action";

// Shared Components
import HorizontalLine from "../../sharedComponents/HorizontalLine/HorizontalLine";
import FriendRequests from "../../LeftSideNav/FriendRequests./FriendRequests";
import Messanger from "../../LeftSideNav/Messanger/Messanger";
import Groups from "../../LeftSideNav/Groups/Groups";
import Pages from "../../LeftSideNav/Pages/Pages";
import Videos from "../../LeftSideNav/Videos/Videos";

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

// Styled Imports
import {
  ProfileSettingsContainer,
  ProfileStttingsHeader,
  ProfilePicContainer,
  ProfilePic,
  ProfileNameContainer,
  ProfileName,
  ProfileOption,
  FeedBackContainer,
  FeedBackImgCtr,
  FeedBackIMage,
  FeedbackTextContainer,
  FeedbackArrow,
  FeedBackText,
  SettingOptionsContainer,
  FriendReqContr,
  SettingsLeftContainer,
  SettingsImageContainer,
  Image,
  OptionText,
  RightImgContainer,
} from "./SeeProfile.Styles";
import { signInSelector } from "../../../Redux/Auth/SignIn/SignIn.Selector";

function SeeProfile(props) {
  const [theme, setTheme] = useState(false);
  const currUsr = useSelector(signInSelector);
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
    props.history.push("/auth");
    localStorage.removeItem("fakeTkn");
    // props.history.go(0);
  }

  // if (signOutState.loading) {
  //   return "Loading....";
  // }

  function closeDrop() {
    dispatch(toggleHamburger());
  }

  return (
    <ProfileSettingsContainer>
      <Link to="/profile">
        <ProfileStttingsHeader>
          <ProfilePicContainer>
            <ProfilePic
              src={
                currUsr.user.hasAvatar || currUsr.newAvatar
                  ? `${config.serverURL}/users/${currUsr.user._id}/avatar`
                  : Default
              }
            />
          </ProfilePicContainer>
          <ProfileNameContainer>
            <ProfileName className="Profile_Name">{`${currUsr.user.firstName} ${currUsr.user.lastName}`}</ProfileName>
            <ProfileOption className="Profile_Utility">
              See Your Profile
            </ProfileOption>
          </ProfileNameContainer>
        </ProfileStttingsHeader>
      </Link>
      <HorizontalLine />
      <FeedBackContainer onClick={staticToast}>
        <FeedBackImgCtr>
          <FeedBackIMage src={Feedback} />
        </FeedBackImgCtr>
        <FeedbackTextContainer>
          <FeedbackArrow className="Feeback_Header">
            Give Feedback
          </FeedbackArrow>
          <FeedBackText className="Feedback_Text">
            Help Me Improve This Project
          </FeedBackText>
        </FeedbackTextContainer>
      </FeedBackContainer>
      <HorizontalLine />
      <SettingOptionsContainer onClick={staticToast}>
        <SettingsLeftContainer>
          <SettingsImageContainer>
            <Image alt="" src={Settings} className="Settings_Image" />
          </SettingsImageContainer>
          <OptionText className="Settings_Text">
            Settings And Privacy
          </OptionText>
        </SettingsLeftContainer>
        <RightImgContainer>
          <Image className="Right_Arrow" src={Right} alt="Right_Arrow" />
        </RightImgContainer>
      </SettingOptionsContainer>

      <SettingOptionsContainer onClick={staticToast}>
        <SettingsLeftContainer>
          <SettingsImageContainer>
            <Image alt="" src={Questionmark} className="Settings_Image" />
          </SettingsImageContainer>
          <OptionText className="Settings_Text">Help And Support</OptionText>
        </SettingsLeftContainer>
        <RightImgContainer>
          <Image className="Right_Arrow" src={Right} alt="Right_Arrow" />
        </RightImgContainer>
      </SettingOptionsContainer>

      <SettingOptionsContainer>
        <SettingsLeftContainer>
          <SettingsImageContainer>
            <Image alt="" src={Moon} className="Settings_Image" />
          </SettingsImageContainer>
          <OptionText className="Settings_Text">Dark Mode</OptionText>
        </SettingsLeftContainer>
        <RightImgContainer onClick={selectThemeFunc}>
          <Image className="Right_Arrow" src={Right} alt="Right_Arrow" />
        </RightImgContainer>
      </SettingOptionsContainer>

      <SettingOptionsContainer onClick={handleClassic}>
        <SettingsLeftContainer>
          <SettingsImageContainer>
            <Image alt="" src={LeftArrow} className="Settings_Image" />
          </SettingsImageContainer>
          <OptionText className="Settings_Text">
            Switch To Classic Facebook
          </OptionText>
        </SettingsLeftContainer>
      </SettingOptionsContainer>

      {/* Runs Only On Smaller Screens */}
      <FriendReqContr>
        <FriendRequests />
        <Link to="/" onClick={closeDrop}>
          <Messanger />
          <Groups />
          <Pages />
        </Link>
        <span onClick={closeDrop}>
          <Videos />
        </span>
      </FriendReqContr>
      <SettingOptionsContainer onClick={handleLogout}>
        <SettingsLeftContainer>
          <SettingsImageContainer>
            <Image alt="" src={Logout} className="Settings_Image" />
          </SettingsImageContainer>
          <OptionText className="Settings_Text">Logout</OptionText>
        </SettingsLeftContainer>
      </SettingOptionsContainer>
    </ProfileSettingsContainer>
  );
}

export default withRouter(React.memo(SeeProfile));
