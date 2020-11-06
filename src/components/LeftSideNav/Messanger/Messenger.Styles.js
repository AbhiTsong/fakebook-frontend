import styled from "styled-components";

const LeftMessageContainer = styled.div`
  display: flex;
  margin-top: 0;
  margin-bottom: 0;
  height: 3rem;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: ${({ light }) =>
      light ? "rgb(188, 188, 207)" : "#3e3c3c"};
    border-radius: 10px;
  }

  @media screen and (max-width: 800px) {
    margin-top: 1rem;
    margin-bottom: 1rem;
    height: 1rem;
  }
`;
const LeftLogoContaner = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  padding-left: 0.5rem;

  @media screen and (max-width: 800px) {
    padding-left: 0;
  }
`;

const LeftMsgLogo = styled.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
`;

const LeftMsgTxtContr = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
`;

const LeftMsgTxt = styled.h5`
  margin: 0;
  padding-left: 1rem;
  color: ${({ light }) => (light ? "#3e3c3c" : `white`)};
`;

export {
  LeftMessageContainer,
  LeftLogoContaner,
  LeftMsgLogo,
  LeftMsgTxtContr,
  LeftMsgTxt,
};
