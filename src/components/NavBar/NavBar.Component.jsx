import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileNavigation from "./ProfileNavigation/ProfileNavigation";

// Redux Imports
import { themeSelector } from "../../Redux/theme/theme.selector";

// Styled Imports
import {
  NavBar,
  NavContent,
  LogoContainer,
  LogoContent,
  NavSearchContainer,
  StyledInput,
  NavbarContent,
  NavbarLinkCntr,
  NavbarProfileCntr,
  IconsContainer,
  NavIcons,
} from "./Navbar.styles";

// Icon Pic Imports
import Logo from "../../Assets/images/fakebookBlack.png";
import Home from "../../Assets/images/home.png";
import Video from "../../Assets/images/youtube.png";
import Group from "../../Assets/images/group.png";
import Box from "../../Assets/images/box.png";
import Profile from "../../Assets/images/profile-icon.png";

function NavBarComponent() {
  let { light } = useSelector(themeSelector);
  return (
    <NavBar light={light}>
      <NavContent>
        <LogoContainer>
          <NavLink to="/home">
            <LogoContent>
              <NavIcons src={Logo} alt="Fakebook Logo" />
            </LogoContent>
          </NavLink>
          <NavSearchContainer>
            <StyledInput
              light={light}
              type="text"
              placeholder="Search Fakebook"
              className="Nav_Search"
            />
          </NavSearchContainer>
        </LogoContainer>
        <NavbarContent>
          <NavbarLinkCntr>
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
              <IconsContainer>
                <NavIcons src={Home} alt="Fakebook Logo" />
              </IconsContainer>
            </NavLink>
          </NavbarLinkCntr>
          <NavbarLinkCntr>
            <NavLink activeClassName="active" to="/videos">
              <IconsContainer>
                <NavIcons src={Video} alt="Fakebook Logo" />
              </IconsContainer>
            </NavLink>
          </NavbarLinkCntr>
          <NavbarLinkCntr>
            <NavLink activeClassName="active" to="/home">
              <IconsContainer>
                <NavIcons src={Group} alt="Fakebook Logo" />
              </IconsContainer>
            </NavLink>
          </NavbarLinkCntr>
          {/* This Code Runs Only On Smaller Screen */}
          <NavbarProfileCntr>
            <NavLink activeClassName="active" to="/profile">
              <IconsContainer>
                <NavIcons src={Profile} alt="Fakebook Logo" />
              </IconsContainer>
            </NavLink>
          </NavbarProfileCntr>
          <NavbarLinkCntr>
            <NavLink activeClassName="active" to="/profile">
              <IconsContainer>
                <NavIcons src={Box} alt="Fakebook Logo" />
              </IconsContainer>
            </NavLink>
          </NavbarLinkCntr>
        </NavbarContent>
        <ProfileNavigation />
      </NavContent>
    </NavBar>
  );
}

export default NavBarComponent;
