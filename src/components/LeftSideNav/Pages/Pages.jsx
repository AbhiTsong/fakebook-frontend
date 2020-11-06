import React from "react";
import { useSelector } from "react-redux";
// import "./Pages.styles.scss";

import {
  PagesContainer,
  PageContent,
  PagesIcon,
  TextContainer,
  PageText,
} from "./Pages.Styles";

import Page from "../../../Assets/images/video.png";
import { themeSelector } from "../../../Redux/theme/theme.selector";

function Pages() {
  let { light } = useSelector(themeSelector);
  return (
    <PagesContainer light={light}>
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
