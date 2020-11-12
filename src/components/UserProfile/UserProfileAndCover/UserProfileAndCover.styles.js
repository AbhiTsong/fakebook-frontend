import styled from "styled-components";
import ReactGif from "../../../Assets/gifs/react.gif";

const ProfileAndCover = styled.div`
  position: relative;
  width: 100%;
  background-image: ${(props) =>
    props.hasCover
      ? `url(${process.env.REACT_APP_BACK_END}/users/${props.id}/cover)`
      : `url(${ReactGif})`};
  background-size: cover;
  height: 20rem;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;

  @media screen and (max-width: 550px) {
    height: 10rem;
  }
`;

const ChangeCoverButton = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 2rem;

  @media screen and (max-width: 550px) {
    right: 1rem;
  }
`;

const StyledButton = styled.button`
  display: flex;
  cursor: pointer;
  border-radius: 5px;
  background-color: lavender;
  padding: 0.2rem 1rem;
  font-weight: bolder;
  outline-color: transparent;

  @media screen and (max-width: 550px) {
    padding: 0.1rem;
  }
`;

const CoverIconContr = styled.div`
  width: 1rem;
  padding-right: 0.5rem;
  @media screen and (max-width: 550px) {
    display: none;
  }
`;
const CoverCameraIcon = styled.img`
  display: block;
  max-height: 100%;
  max-width: 100%;
`;

const ProfilePicContainer = styled.div`
  position: relative;
  top: 52%;
  margin: 0;
  left: 40%;
  width: 10rem;
  height: 10rem;
  border-radius: 50%;

  @media screen and (max-width: 550px) {
    /* margin: auto; */
  }

  @media screen and (max-width: 550px) {
    width: 6rem;
    height: 6rem;
    margin: auto;
    left: 0;
  }
`;

const ProfileIconCntr = styled.div`
  position: absolute;
  bottom: 0;
  font-style: inherit;
  right: 0.5rem;
  border: 0.3rem solid rgb(219, 214, 214);
  background-color: rgb(240, 227, 227);
  border-radius: 50%;
  cursor: pointer;

  @media screen and (max-width: 550px) {
    right: -0.5rem;
  }
`;

const ProfileCamerCntr = styled.div`
  width: 1.5rem;
  @media screen and (max-width: 550px) {
    width: 1rem;
    height: 1rem;
  }
`;

const ProfileCameraIcn = styled.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
`;

const UserNameCutr = styled.div`
  text-align: center;
`;

const UserName = styled.h1`
  margin: 0.5rem 0;
  text-transform: capitalize;
  &:first-child {
    margin-top: 2rem;
  }

  @media screen and (max-width: 550px) {
    font-size: 1.5rem;
  }
`;

const UserBio = styled.h5`
  margin: 0.5rem 0;
  text-transform: capitalize;
  &:first-child {
    margin-top: 2rem;
  }
`;

export {
  ProfileAndCover,
  ChangeCoverButton,
  StyledButton,
  CoverIconContr,
  CoverCameraIcon,
  ProfilePicContainer,
  ProfileIconCntr,
  ProfileCamerCntr,
  ProfileCameraIcn,
  UserNameCutr,
  UserName,
  UserBio,
};
