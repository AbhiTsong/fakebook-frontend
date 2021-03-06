import styled from "styled-components";

const ProfileSettingsContainer = styled.div`
  position: absolute;
  padding: 0.5rem 1rem;
  color: ${({ light }) => (light ? "#3e3c3c" : `white`)};
  background-color: ${({ light }) => (light ? `white` : "#3e3c3c")};
  z-index: 200;
  justify-content: space-between;
  top: 3.5rem;
  width: 20rem;
  right: 0rem;
  z-index: 10;
  margin-right: 1rem;
  border-radius: 10px;
  box-shadow: rgba(43, 44, 44, 0.2) 0px 4px 8px 0px,
    rgba(43, 44, 44, 0.19) 0px 6px 20px 0px;

  @media screen and (max-width: 800px) {
    border-top: 1px solid gray;
    margin-right: 0;
    border-radius: 0;
    width: 96%;
    top: 3rem;
  }

  @media screen and (max-width: 550px) {
    width: 92%;
  }
`;
const ProfieHeaderCntr = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProfileStttingsHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const ProfilePicContainer = styled.div`
  width: 3rem;
  height: 3rem;
`;

const ProfileNameContainer = styled.div`
  margin-left: 1rem;
  color: ${({ light }) => (light ? "black" : "aliceblue")};
`;

const ProfileName = styled.h5`
  margin: 0;
  text-transform: capitalize;
`;

const ProfileOption = styled.h6`
  margin: 0;
`;

const HeaderCloseCntr = styled.div`
  width: 1rem;
  height: 1rem;
  cursor: pointer;
`;

const CloseIcon = styled.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
  background-color: white;
  border-radius: 50%;
`;
const FeedBackContainer = styled.div`
  display: flex;
  align-self: center;
  margin: 0.5rem 0;
  cursor: pointer;
`;

const FeedBackImgCtr = styled.div`
  width: 2rem;
  height: 2rem;
`;
const FeedBackIMage = styled.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
`;

const FeedbackTextContainer = styled.div`
  margin-left: 0.5rem;
`;

const FeedbackArrow = styled.h5`
  margin: 0;
`;

const FeedBackText = styled.h6`
  margin: 0;
`;

const SettingOptionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
  cursor: pointer;
`;

const FriendReqContr = styled.span`
  display: none;
  @media screen and (max-width: 800px) {
    display: inline-block;
  }
`;

const SettingsLeftContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SettingsImageContainer = styled.div`
  width: 1.5rem;
  height: 1.5rem;
`;

const Image = styled.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
`;

const OptionText = styled.h5`
  margin: 0;
  margin-left: 1rem;
`;

const RightImgContainer = styled.div`
  width: 1.5rem;
  height: 1.5rem;
`;

export {
  ProfileSettingsContainer,
  ProfileStttingsHeader,
  ProfieHeaderCntr,
  ProfilePicContainer,
  ProfileNameContainer,
  ProfileName,
  ProfileOption,
  HeaderCloseCntr,
  CloseIcon,
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
};
