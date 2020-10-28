import styled from "styled-components";

const CoverDropContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  bottom: -6.1rem;
  right: 2rem;
  background-color: white;
  width: 14rem;
  height: 6rem;
  padding: 0.2rem;
  border-radius: 10px;
  transition-delay: 0.5s;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 10;

  @media screen and (max-width: 800px){
    right: 1rem
  }
`;

const SelectPhotoContainer = styled.div`
  display: flex;
  margin: 0;
  align-items: center;
`;

const SelectPhotoContent = styled.div`
  width: 1.5rem;
`;

const SelectedPhoto = styled.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
`;

const SelectText = styled.h6`
  margin: 0;
  padding-left: 1rem;
  font-weight: 400;
`;

const UploadPhoto = styled.div`
  display: flex;
  align-items: center;
  // justify-content: center;
  margin: 0;
`;

const UploadText = styled.h6`
  margin: 0;
  padding-left: 1rem;
  font-weight: 400;
`;

export {
  CoverDropContainer,
  SelectPhotoContainer,
  SelectPhotoContent,
  SelectedPhoto,
  SelectText,
  UploadPhoto,
  UploadText,
};
