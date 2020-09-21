import React from "react";
import { NavLink } from "react-router-dom";
import FormInput from "../sharedComponents/FormInput/FormInput.Component";
import "./NavBar.Styles.scss";
import ProfileNavigation from "./ProfileNavigation/ProfileNavigation";

// Icon Pic Imports
import Logo from "../../Assets/images/fakebookBlack.png";
import Home from "../../Assets/images/home.png";
import Video from "../../Assets/images/youtube.png";
import Group from "../../Assets/images/group.png";
import Box from "../../Assets/images/box.png";

function NavBarComponent() {
  return (
    <div className="NavBar_Container">
      <div className="LogoContainer">
        <NavLink to="/home">
          <div className="Logo_Content">
            <img src={Logo} className="Fakebook_Logo" alt="Fakebook Logo" />
          </div>
        </NavLink>
        <div className="Nav_Search_Container">
          <FormInput
            type="text"
            placeholder="Search Fakebook"
            className="Nav_Search"
          />
        </div>
      </div>
      <div className="NavBar_Content">
        <nav className="NavBar">
          {/* <div> */}
          <ul className="NavBarUL">
            <li className="NavBarLI">
              <NavLink
                exact
                activeClassName="active"
                activeStyle={{
                  fontWeight: "bold",
                  color: "red",
                  backgroundColor: "green",
                }}
                to="/home"
              >
                <div className="Logo_Content">
                  <img
                    src={Home}
                    className="Fakebook_Logo"
                    alt="Fakebook Logo"
                  />
                </div>
              </NavLink>
            </li>
            <li className="NavBarLI">
              <NavLink activeClassName="active" to="/videos">
                <div className="Logo_Content">
                  <img
                    src={Video}
                    className="Fakebook_Logo"
                    alt="Fakebook Logo"
                  />
                </div>
              </NavLink>
            </li>
            <li className="NavBarLI">
              <NavLink activeClassName="active" to="/contact">
                <div className="Logo_Content">
                  <img
                    src={Group}
                    className="Fakebook_Logo"
                    alt="Fakebook Logo"
                  />
                </div>
              </NavLink>
            </li>
            <li className="NavBarLI">
              <NavLink activeClassName="active" to="/contact">
                <div className="Logo_Content">
                  <img
                    src={Box}
                    className="Fakebook_Logo"
                    alt="Fakebook Logo"
                  />
                </div>
              </NavLink>
            </li>
          </ul>
          {/* </div> */}
        </nav>
      </div>
      <ProfileNavigation />
    </div>
  );
}

export default NavBarComponent;
