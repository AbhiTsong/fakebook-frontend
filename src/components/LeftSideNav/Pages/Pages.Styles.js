import styled from "styled-components";

const PagesContainer = styled.div`
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
    margin-top: 1rem;
    margin-bottom: 1rem;
    height: 1.5rem;
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
  margin-left: 0.5rem;

  @media screen and (max-width: 800px) {
    margin-left: 0;
  }
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
