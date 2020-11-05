import styled from "styled-components";
import FormInput from "../sharedComponents/FormInput/FormInput.Component";

const NavBar = styled.nav`
  position: sticky;
  display: flex;
  margin: 0;
  align-items: center;
  height: 3rem;
  background-color: ${({light}) => light ? "white" : "#3e3c3c"};
  justify-content: space-between;
  padding: 0.5rem 1rem;
  z-index: 10;
`;

const LogoContainer = styled.div`
  display: flex;
  height: 2rem;
  text-decoration: none;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

const LogoContent = styled.div`
  width: 2rem;
`;

const NavSearchContainer = styled.div`
  padding-left: 0.5rem;
`;

const StyledInput = styled(FormInput)`
  border: none;
  border-radius: 15px;
  height: 100%;
  width: 13rem;
  background-color: whitesmoke;
  padding: 0 0.5rem;
`;

const NavbarContent = styled.div`
  display: flex;
  align-items: center;
  height: 2rem;
  width: 60%;
  justify-content: space-evenly;

  @media screen and (max-width: 800px) {
    width: 85%;
    justify-content: space-between;
  }
`;

const NavbarLinkCntr = styled.div`
  height: 2rem;
`;

const NavbarProfileCntr = styled.div`
  display: none;
  @media screen and (max-width: 800px) {
    display: inline;
    height: 2rem;
  }
`;

const IconsContainer = styled.div`
  width: 2rem;

  @media screen and (max-width: 800px) {
    width: 1.5rem;
  }
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
  NavbarProfileCntr,
  IconsContainer,
  NavIcons,
};
