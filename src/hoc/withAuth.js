import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import {store} from "../Redux/store"

function withAuth(HomeComponent) {
  const state = store.getState();

  console.log("store store", state)
  class MixedComponent extends Component {
    isAuthenticate() {
      const token = JSON.parse(localStorage.getItem("fakeTkn"));
      if (token) {
        return true;
      }
      return false;
    }

    render() {
      if (!this.isAuthenticate()) {
        return <Redirect to="/auth" />;
      }
      return <HomeComponent />;
    }
  }
  return MixedComponent;
}

export default withAuth;
