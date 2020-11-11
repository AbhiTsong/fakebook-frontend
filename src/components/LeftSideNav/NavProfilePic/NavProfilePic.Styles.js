import styled from "styled-components";

const LeftProfiePicContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
  height: 3rem;
  &:hover {
    background-color: ${({ light }) =>
      light ? "rgb(188, 188, 207)" : "#3e3c3c"};
    border-radius: 10px;
  }
`;

const LeftPofileContent = styled.div`
  width: 2rem;
  height: 2rem;
  padding-left: 0.5rem;
`;

const LeftProfileName = styled.h5`
  margin-top: 0.5rem;
  margin-bottom: 0;
  margin-left: 0.5rem;
  color: ${({ light }) => (light ? "black" : "aliceblue")};
  /* color: black; */
  font-weight: 500;
  text-transform: capitalize;
`;

export { LeftProfiePicContainer, LeftPofileContent, LeftProfileName };
