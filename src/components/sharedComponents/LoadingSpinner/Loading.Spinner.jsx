import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "./LoadingSpinner.styles";

function LoadingSpinner() {
  return (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  );
}

export default LoadingSpinner;
