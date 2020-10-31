import styled from "styled-components";

const IntroContainer = styled.div`
  height: 9rem;
  border-radius: 10px;
  background-color: white;
  padding: 1rem;
  margin-bottom: 1rem;
`;

const Header1 = styled.h3`
  margin-top: 0;
  margin-bottom: 1rem;
  font-weight: 500;

  &:last-child {
    font-weight: 300;
  }
`;

const Header2 = styled.h5`
  margin-top: 0;
  margin-bottom: 1rem;
  font-weight: 500;

  &:last-child {
    font-weight: 300;
  }
`;

const RSSIntroHeader = styled.div`
  display: flex;
`;

const RSSFeedContainer = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 1rem;
`;

const RSSIcon = styled.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 5rem;
`;

const StyledButton = styled.button`
  height: 2rem;
`;

const LoadingImage = styled.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
  margin: auto;
`;

export {
  IntroContainer,
  Header1,
  Header2,
  RSSIntroHeader,
  RSSFeedContainer,
  RSSIcon,
  ButtonContainer,
  StyledButton,
  LoadingImage
};
