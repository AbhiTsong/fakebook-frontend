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
import { useCalcInnerWidth } from "../../../hooks/useCalcInnerWidth";

function Pages() {
  let width = useCalcInnerWidth(window.innerWidth)
  return (
    <PagesContainer width={width} >
      <PageContent>
        <PagesIcon width={width} src={Page} />
      </PageContent>
      <TextContainer>
        <PageText>Pages</PageText>
      </TextContainer>
    </PagesContainer>
  );
}

export default Pages;
