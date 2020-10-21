import styled from "styled-components";

const PicCropperCOntainer = styled.div`
  position: relative;
  justify-content: center;
  background-color: #fefefe;
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
`;

const HeaderContainer = styled.div`
  display: flex;
`;

const HeaderContent = styled.div`
  margin: auto;
`;

// const HeaderTitle = styled.h4``;

const CloseButtonCntr = styled.div`
  padding-right: 0.5rem;
`;

const PicPreviewContr = styled.div`
  // width: 100%;
  height: 20rem;
  position: relative;
  // margin: auto 1rem;
  display: flex;
  justify-content: center;
`;

// const PicPreviewContent = styled.div``;

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
  color: blue;
  padding: 0.5rem 1rem;
  border: none;
  background-color: transparent;
  outline-color: transparent;
  cursor: pointer;
`;

const SaveBtn = styled.button`
  padding: 0.5rem 3rem;
  background-color: blue;
  border-radius: 5px;
  border: none;
  color: white;
  outline-color: transparent;
  cursor: pointer;
`;

export {
  PicCropperCOntainer,
  HeaderContainer,
  HeaderContent,
  // HeaderTitle,
  CloseButtonCntr,
  PicPreviewContr,
  // PicPreviewContent,
  PreviewPic,
  FooterCntr,
  CancleBtn,
  SaveBtn,
};
