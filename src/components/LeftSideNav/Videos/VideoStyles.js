import styled from "styled-components";

const VideoContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
  margin-top: ${({ width }) => (width < 800 ? "1.5rem" : "")};
  margin-bottom: ${({ width }) => (width < 800 ? "1rem" : "")};
  height: ${({ width }) => (width < 800 ? "1rem" : " 3rem")};
  cursor: pointer;
  &:hover {
    background-color: rgb(188, 188, 207);
    border-radius: 10px;
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
  padding-left: ${({ width }) => (width > 800 ? "0.5rem" : "0")};
`;

const VideoTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
`;

const VideoText = styled.h5`
  margin: 0;
  padding-left: 1rem;
`;

export {
  VideoContainer,
  VideoContent,
  VideoIcon,
  VideoTextContainer,
  VideoText,
};
