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
  position: fixed;
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
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 550px) {
    right: 0.5rem;
    width: 74%;
    word-break: break-all;
    padding: 1.5rem;
    height: 3rem;
  }
`;

const TosterMessage = styled.h5`
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

  @media screen and (max-width: 550px) {
    display: none;
  }
`;

export { TosterContaier, TosterMessage, CloseButton };
