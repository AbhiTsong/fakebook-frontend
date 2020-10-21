import React from "react";
import RSS from "../../../../Assets/images/RSS-Notifier-icon.png";

// Styled Imports
import {
  IntroContainer,
  Header1,
  Header2,
  RSSIntroHeader,
  RSSFeedContainer,
  RSSIcon,
  ButtonContainer,
  StyledButton,
} from "./UserInfoComponent.styles";

function UserIntro() {
  return (
    <IntroContainer>
      <Header1>Intro</Header1>
      <RSSIntroHeader>
        <RSSFeedContainer>
          <RSSIcon src={RSS} />
        </RSSFeedContainer>
        <Header2 className="Header">Followed By 38 people</Header2>
      </RSSIntroHeader>
      <ButtonContainer>
        <StyledButton>Edit Details</StyledButton>
        <StyledButton>Edit Featured</StyledButton>
      </ButtonContainer>
    </IntroContainer>
  );
}

export default UserIntro;
