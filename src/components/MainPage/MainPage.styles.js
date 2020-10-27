import styled from "styled-components";

const MainPageContainer = styled.div`
  position: relative;
  width: 130rem;
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  align-items: center;
  color: gray;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0;
  }

  @media screen and (max-width: 550px) {
    padding-top: 0;
  }
`;

const MainPageContent = styled.div`
  width: 75%;
  @media screen and (max-width: 550px) {
    width: 100%;
  }
`;

export { MainPageContainer, MainPageContent };
