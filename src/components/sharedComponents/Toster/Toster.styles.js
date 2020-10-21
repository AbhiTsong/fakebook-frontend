import styled, { keyframes } from "styled-components";

const TostAnimation = keyframes`
  from {
    top: -2rem;
  }

  to {
    top: 1rem;
  }
`;

const TosterContaier = styled.div`
  display: flex;
  position: absolute;
  top: 1rem;
  right: 4rem;
  z-index: 1000;
  background-color: lightslategray;
  border-radius: 10px;
  padding: 0.5rem 2rem;
  height: 1.5rem;
  align-items: baseline;
  padding-right: 1rem;
  animation: 1s ${TostAnimation} linear;
`;

const TosterMessage = styled.h5`
  height: 0;
  margin: 0;
  color: ghostwhite;
  font-size: 1rem;
`;

const CloseButton = styled.span`
  margin: 0;
  color: ghostwhite;
  height: 0;
  margin-left: 2rem;
  cursor: pointer;
`;

export { TosterContaier, TosterMessage, CloseButton };
