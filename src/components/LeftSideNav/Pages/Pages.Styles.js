import styled from "styled-components";

const PagesContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;
  height: 3rem;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: rgb(188, 188, 207);
    border-radius: 10px;
  }
`;

const PageContent = styled.div`
  width: 1.5rem;
`;

const PagesIcon = styled.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
  margin-left: 0.5rem;
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
`;

const PageText = styled.h5`
  margin: 0;
  padding-left: 1.5rem;
`;

export { PagesContainer, PageContent, PagesIcon, TextContainer, PageText };
