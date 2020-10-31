import React, { useState, useReducer } from "react";
import RSS from "../../../../Assets/images/RSS-Notifier-icon.png";
import { useDispatch } from "react-redux";

// Gif Import
import Loading from "../../../../Assets/gifs/loading2.gif";

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
  LoadingImage,
} from "./UserInfoComponent.styles";
import { showToster } from "../../../../Redux/toster/toster.action";

const INITIAL_STATE = {
  loader1: false,
  loader2: false,
};

// Reducer Of Setting the loading State
function reducer(state, action) {
  switch (action.type) {
    case "LOADER1":
      return {
        ...state,
        loader1: true,
      };

    case "LOADER2":
      return {
        ...state,
        loader2: true,
      };
    case "RESET":
      return {
        loader1: false,
        loader2: false,
      };
    default:
      break;
  }
}

function UserIntro() {
  const dispatch = useDispatch();
  let [loading, dispatchLoading] = useReducer(reducer, INITIAL_STATE);

  if (loading.loader1 || loading.loader2) {
    setTimeout(() => {
      dispatchLoading({ type: "RESET" });
      dispatch(showToster("Something Went Wrong"));
    }, 20000);
  }

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
        <StyledButton
          disabled={loading.loader1}
          onClick={() => dispatchLoading({ type: "LOADER1" })}
        >
          {loading.loader1 ? <LoadingImage src={Loading} /> : "Edit Details"}
        </StyledButton>
        <StyledButton
          disabled={loading.loader2}
          onClick={() => dispatchLoading({ type: "LOADER2" })}
        >
          {loading.loader2 ? <LoadingImage src={Loading} /> : "Edit Featured"}
        </StyledButton>
      </ButtonContainer>
    </IntroContainer>
  );
}

export default UserIntro;
