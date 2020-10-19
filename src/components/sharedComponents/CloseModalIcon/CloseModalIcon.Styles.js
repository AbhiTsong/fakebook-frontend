import styled from "styled-components";

const CloseBtnContr = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CloseButton = styled.span`
  color: rgb(146, 135, 135);
  float: right;
  font-size: 2rem;
  background-color: rgb(241, 238, 235);
  border-radius: 50%;
  width: 2rem;
  text-align: center;

  &:hover,
  &:focus {
    color: rgba(110, 106, 106, 0.966);
    text-decoration: none;
    cursor: pointer;
  }
`;

export { CloseBtnContr, CloseButton };
