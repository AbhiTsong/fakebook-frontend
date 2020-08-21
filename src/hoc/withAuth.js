import React, { Component } from "react";
import { Redirect } from "react-router-dom";

function withAuth(HomeComponent) {
  class MixedComponent extends Component {
    isAuthenticate() {
      const token = JSON.parse(localStorage.getItem("fakeTkn"));
      if (token) {
        return true;
      }
    }

    render() {
      if (!this.isAuthenticate()) {
        return <Redirect to="/auth/signin" />;
      }
      return <HomeComponent />;
    }
  }
  return MixedComponent;
}

export default withAuth;
