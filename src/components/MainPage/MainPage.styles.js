import styled from "styled-components";

const MainPageContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  align-items: center;
  color: gray;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0;
  }
`;

const MainPageContent = styled.div`
  width: 47rem;
`;

export { MainPageContainer, MainPageContent };
