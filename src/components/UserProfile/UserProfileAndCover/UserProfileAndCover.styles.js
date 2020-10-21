import styled from "styled-components";
import ReactGif from "../../../Assets/gifs/react.gif";
import config from "../../../config/config.json"

const ProfileAndCover = styled.div`
  position: relative;
  width: 100%;
  background-image: ${props => props.hasCover ? `${config.serverURL}/users/${props.id}/cover` : `url(${ReactGif})`};
  background-size: cover;
  height: 20rem;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
`;

const ChangeCoverButton = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 2rem;
`;

const StyledButton = styled.button`
  display: flex;
  cursor: pointer;
`;

const CoverIconContr = styled.div`
  width: 1rem;
  padding-right: 0.5rem;
`;
const CoverCameraIcon = styled.img`
  display: block;
  max-height: 100%;
  max-width: 100%;
`;

const ProfilePicContainer = styled.div`
  position: relative;
  top: 52%;
  left: 40%;
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
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
`;

const ProfileCamerCntr = styled.div`
  width: 1.5rem;
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
