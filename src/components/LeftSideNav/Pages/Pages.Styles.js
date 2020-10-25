import styled from "styled-components";

const PagesContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
  margin-top: ${({ width }) => (width < 800 ? "1rem" : "")};
  margin-bottom: ${({ width }) => (width < 800 ? "1rem" : "")};
  height: ${({ width }) => (width < 800 ? "1.5rem" : " 3rem")};
  cursor: pointer;
  &:hover {
    background-color: rgb(188, 188, 207);
    border-radius: 10px;
  }
`;

const PageContent = styled.div`
  width: 1.5rem;
  height: 1.5rem;
`;

const PagesIcon = styled.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
  margin-left: ${({ width }) => (width > 800 ? "0.5rem" : "0")};
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
`;

const PageText = styled.h5`
  margin: 0;
  padding-left: 1rem;
`;

export { PagesContainer, PageContent, PagesIcon, TextContainer, PageText };
