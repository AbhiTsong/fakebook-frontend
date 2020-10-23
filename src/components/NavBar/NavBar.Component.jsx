import React from "react";
import { NavLink } from "react-router-dom";
import ProfileNavigation from "./ProfileNavigation/ProfileNavigation";

// Custom Hook Import
import { useCalcInnerWidth } from "../../hooks/useCalcInnerWidth";

// Styled Imports
import {
  NavBar,
  LogoContainer,
  LogoContent,
  NavSearchContainer,
  StyledInput,
  NavbarContent,
  NavbarLinkCntr,
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
  let width = useCalcInnerWidth(window.innerWidth);
  return (
    <NavBar>
      <LogoContainer width={width}>
        <NavLink to="/home">
          <LogoContent>
            <NavIcons src={Logo} alt="Fakebook Logo" />
          </LogoContent>
        </NavLink>
        <NavSearchContainer>
          <StyledInput
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
            <IconsContainer width={width}>
              <NavIcons src={Home} alt="Fakebook Logo" />
            </IconsContainer>
          </NavLink>
        </NavbarLinkCntr>
        <NavbarLinkCntr>
          <NavLink activeClassName="active" to="/videos">
            <IconsContainer width={width}>
              <NavIcons src={Video} alt="Fakebook Logo" />
            </IconsContainer>
          </NavLink>
        </NavbarLinkCntr>
        <NavbarLinkCntr>
          <NavLink activeClassName="active" to="/contact">
            <IconsContainer width={width}>
              <NavIcons src={Group} alt="Fakebook Logo" />
            </IconsContainer>
          </NavLink>
        </NavbarLinkCntr>
        {width < 800 ? (
          <NavbarLinkCntr>
            <NavLink activeClassName="active" to="/profile">
              <IconsContainer width={width}>
                <NavIcons src={Profile} alt="Fakebook Logo" />
              </IconsContainer>
            </NavLink>
          </NavbarLinkCntr>
        ) : (
          ""
        )}
        <NavbarLinkCntr>
          <NavLink activeClassName="active" to="/contact">
            <IconsContainer width={width}>
              <NavIcons src={Box} alt="Fakebook Logo" />
            </IconsContainer>
          </NavLink>
        </NavbarLinkCntr>
      </NavbarContent>
      <ProfileNavigation />
    </NavBar>
  );
}

export default NavBarComponent;
