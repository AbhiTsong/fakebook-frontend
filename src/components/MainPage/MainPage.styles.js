import styled from "styled-components";

const MainPageContainer = styled.div`
  position: relative;
  width: 130rem;
  display: flex;
  flex-direction: column;
  padding-top: ${({width}) => width < 550 ? "" :  "1rem"};
  align-items: center;
  color: gray;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0;
  }
`;

const MainPageContent = styled.div`
  width: ${({ width }) => (width < 550 ? "100%" : "75%")};
`;

export { MainPageContainer, MainPageContent };
