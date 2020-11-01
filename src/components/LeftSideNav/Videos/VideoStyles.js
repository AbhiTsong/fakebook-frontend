import styled from "styled-components";

const VideoContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
  margin-top: 0;
  margin-bottom: 0;
  height: 3rem;
  cursor: pointer;
  &:hover {
    background-color: rgb(188, 188, 207);
    border-radius: 10px;
  }

  @media screen and (max-width: 800px) {
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    height: 1rem;
  }
`;

const VideoContent = styled.div`
  width: 1.5rem;
  height: 1.5rem;
`;

const VideoIcon = styled.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
  padding-left: 0.5rem;

  @media screen and (max-width: 800px) {
    padding-left: 0;
  }
`;

const VideoTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
`;

const VideoText = styled.h5`
  margin: 0;
  padding-left: 1.5rem;
`;

export {
  VideoContainer,
  VideoContent,
  VideoIcon,
  VideoTextContainer,
  VideoText,
};
