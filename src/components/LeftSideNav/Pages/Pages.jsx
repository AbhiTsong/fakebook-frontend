import React from "react";
// import "./Pages.styles.scss";

import {
  PagesContainer,
  PageContent,
  PagesIcon,
  TextContainer,
  PageText,
} from "./Pages.Styles";

import Page from "../../../Assets/images/video.png";

function Pages() {
  return (
    <PagesContainer>
      <PageContent>
        <PagesIcon src={Page} />
      </PageContent>
      <TextContainer>
        <PageText>Pages</PageText>
      </TextContainer>
    </PagesContainer>
  );
}

export default Pages;
