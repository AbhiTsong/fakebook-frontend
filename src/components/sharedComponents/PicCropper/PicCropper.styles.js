import styled from "styled-components";

const PicCropperCOntainer = styled.div`
  position: relative;
  justify-content: center;
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 40rem;
  height: 50%;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: animatetop;
  animation-duration: 0.4s;
  color: ${({ light }) => (light ? "#3e3c3c" : `white`)};
  background-color: ${({ light }) => (light ? "whitesmoke" : "#343232")};

  @media screen and (max-width: 550px) {
    width: 22rem;
    height: 22rem;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
`;

const HeaderContent = styled.div`
  margin: auto;
`;

// const HeaderTitle = styled.h4``;

const CloseButtonCntr = styled.div`
  display: flex;
  margin-right: 0.5rem;
`;

const PicPreviewContr = styled.div`
  height: 20rem;
  position: relative;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 550px) {
    height: 15rem;
  }
`;

const PicPreviewContent = styled.div`
  padding: 0.5rem;
`;

const PreviewPic = styled.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
  border-radius: 15px;
  margin: auto;
`;

const FooterCntr = styled.footer`
  display: flex;
  justify-content: flex-end;
  padding: 0.5rem 1rem;
`;

const CancleBtn = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  background-color: transparent;
  outline-color: transparent;
  color: ${({ light }) => (light ? `blue` : `white`)};
  cursor: pointer;
  &:hover {
    background-color: ${({ light }) => (light ? `transparent` : "#343232")};
  }
`;

const SaveBtn = styled.button`
  padding: 0.5rem 3rem;
  background-color: blue;
  border-radius: 5px;
  border: none;
  color: white;
  outline-color: transparent;
  cursor: pointer;
  &:hover {
    background-color: #3434edfc;
  }
`;

export {
  PicCropperCOntainer,
  HeaderContainer,
  HeaderContent,
  // HeaderTitle,
  CloseButtonCntr,
  PicPreviewContr,
  PicPreviewContent,
  PreviewPic,
  FooterCntr,
  CancleBtn,
  SaveBtn,
};
