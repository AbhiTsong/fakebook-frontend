import styled from "styled-components";

const UserPhotoSuggestCntr = styled.div`
  position: relative;
  justify-content: center;
  background-color: #fefefe;
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 0;
  width: 40rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: animatetop;
  animation-duration: 0.4s;
  &:focus {
    outline: none;
  }

  @media screen and (max-width: 550px) {
    width: 22rem;
  }
`;

const ComponentTitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  align-items: center;
  height: 2rem;
`;

const Title = styled.h4`
  margin: 0;
  flex: 1;
  text-align: center;
`;

const UploadBtnAndPhoto = styled.div`
  margin-bottom: 1rem;
`;

const ButtonCntr = styled.div``;

const SuggestText = styled.h5`
  margin: auto;
`;

const AllPhotCntr = styled.div`
  height: 28rem;
  overflow-y: scroll;
`;

const AllPhotoContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const PhotoContent = styled.div`
  width: 5.9rem;
  height: 6rem;
  margin: 0.2rem;
  &:last-child {
    border-bottom-right-radius: 5px;
  }
`;

const Image = styled.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
`;

export {
  UserPhotoSuggestCntr,
  ComponentTitle,
  Title,
  UploadBtnAndPhoto,
  ButtonCntr,
  SuggestText,
  AllPhotCntr,
  AllPhotoContent,
  PhotoContent,
  Image,
};
