import styled from "styled-components";

const DescriptonButtonContainer = styled.div`
  width: 13rem;
`;

const DescriptionText = styled.h5`
  margin: 0;
  margin-top: 1.5rem;
  text-transform: capitalize;
  font-weight: 100;
`;

const DescriptionSpan = styled.span`
  font-weight: bold;
`;

const TimeContainer = styled.h6`
  margin: 0;
  color: blue;
`;

const ButtonsContainer = styled.div`
  margin-top: 0.5rem;
  display: flex;
`;

const AcceptButton = styled.button`
  padding: 0.2rem 2rem;
  border-radius: 5px;
  background-color: blue;
  color: white;
  outline-color: transparent;
  border: none;
  margin-right: 0.5rem;
  cursor: pointer;
  &:hover {
    background-color: rgb(56, 56, 247);
  }
`;

const DeclineButton = styled.button`
  padding: 0.2rem 2rem;
  border-radius: 5px;
  background-color: lavender;
  outline-color: transparent;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: rgb(192, 192, 202);
  }
`;
export {
  DescriptonButtonContainer,
  DescriptionText,
  DescriptionSpan,
  TimeContainer,
  ButtonsContainer,
  AcceptButton,
  DeclineButton,
};
