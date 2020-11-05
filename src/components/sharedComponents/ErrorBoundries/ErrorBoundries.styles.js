import styled from "styled-components";

const ErrorImageOverlay = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ErrorImageContainer = styled.div`
  display: inline-block;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;
  width: 40vh;
  height: 40vh;
`;

const ErrorImageText = styled.h2`
  font-size: 28px;
  color: #2f8e89;
`;

const ErrorImageText2 = styled.h6`
  font-size: 20px;
  color: #2f8e89;
  padding: 0 5rem;
  text-align: center;
`;

export {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText,
  ErrorImageText2,
};
