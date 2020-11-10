import React, { Component } from "react";
import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText,
  ErrorImageText2
} from "./ErrorBoundries.styles";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {}

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl={`https://i.imgur.com/oCkEbrA.png`} />
          <ErrorImageText>This Page is Lost in the Wind</ErrorImageText>
          <ErrorImageText2>
            The child had looked so excited when the clown had presented a large
            red balloon. You had seen this, but in the throes of your morning
            commute you didn’t register it until it was too late. Who asked the
            government to support a fair right through Main Street during a week
            day anyway? Your bike barrelled right between the child and the
            clown and sent the balloon on its merry way. You didn’t turn back to
            see the damage you had done. Later you saw the balloon floating
            outside your office window.
          </ErrorImageText2>
        </ErrorImageOverlay>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
