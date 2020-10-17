import styled from "styled-components";

const ProfileSettingsContainer = styled.div`
  position: absolute;
  top: 5rem;
  right: 1rem;
  background-color: white;
  z-index: 100;
  width: 20rem;
  justify-content: space-between;
  padding: 0.5rem 1rem;
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

const ProfilePic = styled.img`
  display: block;
  max-width: 100%;
  max-height: 100;
  border-radius: 50%;
`;

const ProfileNameContainer = styled.div`
  margin-left: 1rem;
`;

const ProfileName = styled.h5`
  margin: 0;
  text-transform: capitalize;
`;

const ProfileOption = styled.h6`
  margin: 0;
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

const IconContainer = styled.div`
  width: 1.5rem;
  height: 1.5rem;
`;

const IconImage = styled.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
`;

const SettingOptionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
  cursor: pointer;
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
  SettingsLeftContainer,
  SettingsImageContainer,
  Image,
  OptionText,
  RightImgContainer,
};
