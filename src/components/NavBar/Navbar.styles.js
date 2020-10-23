import styled, { css } from "styled-components";
import FormInput from "../sharedComponents/FormInput/FormInput.Component";

const NavBar = styled.nav`
  display: flex;
  margin: 0;
  align-items: center;
  height: 3rem;
  background-color: white;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  border: 1px solid lavender;
`;

function logoStyles({ width }) {
  if (width < 800) {
    return css`
      display: none;
    `;
  }
  return css`
    display: flex;
    height: 2rem;
    text-decoration: none;
  `;
}

const LogoContainer = styled.div`
  ${logoStyles}
`;

const LogoContent = styled.div`
  width: 2rem;
`;

const showNone = css`
  display: none;
`;

// Removing Contaier On Smaller Screen Sizes
function containerStye({ width }) {
  if (width < 800) {
    return showNone;
  }
}

const NavSearchContainer = styled.div`
  padding-left: 0.5rem;

  ${containerStye}
  @media screen and(width: 375px) {
    display: none;
  }
`;

const StyledInput = styled(FormInput)`
  border: none;
  border-radius: 15px;
  height: 100%;
  width: 13rem;
  background-color: whitesmoke;
  padding: 0 0.5rem;

  @media screen and(max-width: 800px) {
    display: none;
  }
`;

const NavbarContent = styled.div`
  display: flex;
  align-items: center;
  height: 2rem;
  justify-content: space-evenly;
  width: 60%;
`;

const NavbarLinkCntr = styled.div`
  height: 2rem;
`;

// Resizing the icons for the smaller screens
function smallScreenIcon({ width }) {
  if (width < 800) {
    return css`
      width: 1.5rem;
    `;
  }
  return css`
    width: 2rem;
  `;
}

const IconsContainer = styled.div`
  ${smallScreenIcon}
`;
const NavIcons = styled.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
`;

export {
  NavBar,
  LogoContainer,
  LogoContent,
  NavSearchContainer,
  StyledInput,
  NavbarContent,
  NavbarLinkCntr,
  IconsContainer,
  NavIcons,
};
