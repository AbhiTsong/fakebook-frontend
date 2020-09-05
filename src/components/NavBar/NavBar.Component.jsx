import React from "react";
import { NavLink } from "react-router-dom";
import FormInput from "../sharedComponents/FormInput/FormInput.Component";
import "./NavBar.Styles.scss";
import ProfileNavigation from "./ProfileNavigation/ProfileNavigation";

function NavBarComponent() {
  return (
    <div className="NavBar_Container">
      <div className="LogoContainer">
        <NavLink className="LogoContent" to="/home">
          f
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
              <NavLink exact activeClassName="active" to="/home">
                Home
              </NavLink>
            </li>
            <li className="NavBarLI">
              <NavLink activeClassName="active" to="/users">
                Users
              </NavLink>
            </li>
            <li className="NavBarLI">
              <NavLink activeClassName="active" to="/contact">
                Contact
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
