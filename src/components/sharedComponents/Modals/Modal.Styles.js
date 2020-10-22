import styled, { keyframes } from "styled-components";

/* Add Animation */
const ModalAnimation = keyframes`
  from {
    top: -300px;
    opacity: 0;
  }
  to {
    top: 0px;
    opacity: 1;
  }

  from {
    top: -300px;
    opacity: 0;
  }
  to {
    top: 0px;
    opacity: 1;
  }
`;

const ModalContainer = styled.div`
  /* Hidden by default */
  position: fixed;
  display: flex; /* Stay in place */
  align-items: center;
  justify-content: space-around;
  animation: ${ModalAnimation} 0.5s ease-in-out;
  z-index: 100 !important; /* Sit on top */
  //   padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  color: gray;
  width: 100vw; /* Full width */
  height: 100vh; /* Full height */
  overflow: hidden; /* Enable scroll if needed */
  background-color: rgba(255, 255, 255, 0.9); /* Fallback color */
`;

export { ModalContainer };
