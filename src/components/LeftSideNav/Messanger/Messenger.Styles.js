import styled from "styled-components";

const LeftMessageContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;
  height: 3rem;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: rgb(188, 188, 207);
    border-radius: 10px;
  }
`;
const LeftLogoContaner = styled.div`
  width: 1.5rem;
  padding-left: 0.5rem;
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
`;

export {
  LeftMessageContainer,
  LeftLogoContaner,
  LeftMsgLogo,
  LeftMsgTxtContr,
  LeftMsgTxt,
};
