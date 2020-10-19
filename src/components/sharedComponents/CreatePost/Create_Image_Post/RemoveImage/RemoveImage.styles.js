import styled from "styled-components";

const RemovePicButton = styled.span`
  position: absolute;
  top: 5px;
  right: 5px;
  background: white;
  color: gray;
  line-height: 15px;
  padding: 10px;
  border-radius: 50%;
  font-size: 1.5rem;
  font-weight: bold;
  height: 17px;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;

export { RemovePicButton };
