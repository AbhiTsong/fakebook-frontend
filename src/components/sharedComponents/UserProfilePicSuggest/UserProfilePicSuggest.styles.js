import styled, { css } from "styled-components";

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

const ButtonCntr = styled.div`
  margin: 0.5rem 0;
`;

const SuggestText = styled.h5`
  margin: auto;
  padding-left: 1rem;
`;

const AllPhotCntr = styled.div`
  height: 28rem;
  overflow-y: scroll;
  overflow-x: hidden;
`;

const AllPhotoContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

// Showing the style only on load
function loadingStyle({ loading }) {
  if (loading) {
    return css`
      display: flex;
      align-items: center;
      justify-content: center;
    `;
  }

  return "";
}

const PhotoContent = styled.div`
  width: 5.9rem;
  height: 6rem;
  margin: 0.2rem;
  ${loadingStyle}
  &:last-child {
    border-bottom-right-radius: 5px;
  }
`;

const LoaderContr = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 5px;
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
  LoaderContr,
  Image,
};
