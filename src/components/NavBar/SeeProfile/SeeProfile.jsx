import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, withRouter } from "react-router-dom";

// Redux Imports
import { showToster } from "../../../Redux/toster/toster.action";
import { toggleHamburger } from "../../../Redux/Hamburger/Hamburger.action";
import { selectTheme } from "../../../Redux/theme/theme.action";
import { SignOutAction } from "../../../Redux/Auth/SignOut/SignOut.Actions";
import { signInSelector } from "../../../Redux/Auth/SignIn/SignIn.Selector";
import { themeSelector } from "../../../Redux/theme/theme.selector";

// Shared Components
import HorizontalLine from "../../sharedComponents/HorizontalLine/HorizontalLine";
import FriendRequests from "../../LeftSideNav/FriendRequests./FriendRequests";
import Messanger from "../../LeftSideNav/Messanger/Messanger";
import Groups from "../../LeftSideNav/Groups/Groups";
import Pages from "../../LeftSideNav/Pages/Pages";
import Videos from "../../LeftSideNav/Videos/Videos";
import UserProfilePic from "../../sharedComponents/UserProfilePic/UserProfilePic";

// Image Import
import Feedback from "../../../Assets/images/feedback.png";
import Right from "../../../Assets/images/rightArrow.png";
import Settings from "../../../Assets/images/settings.png";
import Questionmark from "../../../Assets/images/questionmark.png";
import Moon from "../../../Assets/images/moon.png";
import LeftArrow from "../../../Assets/images/leftArrow.png";
import Logout from "../../../Assets/images/logout.png";
import Sun from "../../../Assets/images/sun.png";

// Styled Imports
import {
  ProfileSettingsContainer,
  ProfileStttingsHeader,
  ProfilePicContainer,
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

function SeeProfile(props) {
  const [theme, setTheme] = useState(false);
  const currUsr = useSelector(signInSelector);
  const { light } = useSelector(themeSelector);
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

  function closeDrop() {
    // dispatch(toggleHamburger());
  }

  return (
    <ProfileSettingsContainer light={light}>
      <Link to="/profile">
        <ProfileStttingsHeader>
          <ProfilePicContainer>
            <UserProfilePic />
          </ProfilePicContainer>
          <ProfileNameContainer light={light}>
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
        <SettingsLeftContainer onClick={selectThemeFunc}>
          <SettingsImageContainer>
            <Image alt="" src={light ? Moon : Sun} className="Settings_Image" />
          </SettingsImageContainer>
          <OptionText className="Settings_Text">
            {light ? `Dark Mode` : "Light Mode"}
          </OptionText>
        </SettingsLeftContainer>
        {/* <RightImgContainer > */}
        {/* <Image className="Right_Arrow" src={Right} alt="Right_Arrow" /> */}
        {/* </RightImgContainer> */}
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
