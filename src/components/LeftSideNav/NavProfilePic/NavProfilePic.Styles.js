import styled from "styled-components";

const LeftProfiePicContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
  height: 3rem;
  &:hover {
    background-color: rgb(194, 194, 207);
    border-radius: 10px;
  }
`;

const LeftPofileContent = styled.div`
  width: 2rem;
  height: 2rem;
  padding-left: 0.5rem;
`;

const LeftProfilePic = styled.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
  border-radius: 50%;
`;

const LeftProfileName = styled.h5`
  margin-top: 0.5rem;
  margin-bottom: 0;
  margin-left: 0.5rem;
  color: black;
  font-weight: 500;
  text-transform: capitalize;
`;

export {
  LeftProfiePicContainer,
  LeftPofileContent,
  LeftProfilePic,
  LeftProfileName,
};
