import styled from "styled-components";

const CoverPreviewContainer = styled.div`
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

  @media screen and (max-width: 550px) {
    width: 22rem;
    height: 22rem;
  }
`;

const CoverPreviewHeader = styled.div`
  display: flex;
`;

const CoverPreviewContent = styled.div`
  margin: auto;
`;

const CoverPreviewCloseContr = styled.div`
  display: flex;
  margin-right: 0.5rem;
`;

const CoverPicPreviewContainer = styled.div`
  height: 20rem;
  position: relative;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 550px){
    height: 15rem
  }
`;

const CoverPicPreviewContent = styled.div`
  padding: 0.5rem;
`;

const CoverPreviewPic = styled.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
  border-radius: 15px;
  margin: auto;
`;

const CoverPicPreviewFooter = styled.footer`
  display: flex;
  justify-content: flex-end;
  padding: 0.5rem 1rem;
`;

const CoverCancleBtn = styled.button`
  color: blue;
  padding: 0.5rem 1rem;
  border: none;
  background-color: transparent;
  outline-color: transparent;
  cursor: pointer;
`;

const CoverUploadBtn = styled.button`
  padding: 0.5rem 3rem;
  background-color: blue;
  border-radius: 5px;
  border: none;
  color: white;
  outline-color: transparent;
  cursor: pointer;
`;

export {
  CoverPreviewContainer,
  CoverPreviewHeader,
  CoverPreviewContent,
  CoverPreviewCloseContr,
  CoverPicPreviewContainer,
  CoverPicPreviewContent,
  CoverPreviewPic,
  CoverPicPreviewFooter,
  CoverCancleBtn,
  CoverUploadBtn,
};
