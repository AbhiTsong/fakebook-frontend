import styled from "styled-components";

const PostTextArea = styled.textarea`
  width: 99%;
  height: 10rem;
  border: none;
  outline: none;
  font-size: 1.4rem;
  resize: none;
  &:focus {
    outline-color: none;
  }
`;

const WordLeftConteiner = styled.h6`
  margin: 0;
`;

export { PostTextArea, WordLeftConteiner };
