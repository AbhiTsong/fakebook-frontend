import styled from "styled-components";

const NavBarContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 15rem;
`;

const RightNameAndProfile = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProfilePicContainer = styled.div`
  width: 1.5rem;
  height: 1.5rem;
`;

const UserName = styled.h5`
  margin-top: 0.5rem;
  margin-bottom: 0;
  margin-left: 0.5rem;
  text-transform: capitalize;
`;

const IconsContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: lavender;
  border-radius: 58%;
  height: 1rem;
  width: 1rem;
  padding: 0.5rem;
  cursor: pointer;
`;

const IconImageContainer = styled.div``;

const IconImage = styled.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
`;

const RequestCount = styled.span`
  position: absolute;
  top: -0.3rem;
  right: -0.3rem;
  background-color: red;
  border-radius: 35%;
  font-size: 0.6rem;
  color: wheat;
  padding: 0.1rem 0.3rem;
  font-weight: bolder;
`;

export {
  NavBarContainer,
  RightNameAndProfile,
  ProfilePicContainer,
  UserName,
  IconsContainer,
  IconImageContainer,
  IconImage,
  RequestCount
};
