import styled from "styled-components";

const PostTextArea = styled.textarea`
  width: 99%;
  height: 10rem;
  border: none;
  outline: none;
  font-size: 1.4rem;
  resize: none;
  color: ${({ light }) => (light ? "" : "white")};
  background-color: ${({ light }) => (light ? `lavander` : `#3e3c3c`)};
  &:focus {
    outline-color: none;
  }
`;

const WordLeftConteiner = styled.h6`
  margin: 0;
`;

export { PostTextArea, WordLeftConteiner };
