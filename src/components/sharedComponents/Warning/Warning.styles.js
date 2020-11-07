import styled from "styled-components";

const WarningOverLay = styled.div`
  position: absolute;
  margin: auto;
  border: px solid gray;
  width: 100%;
  height: 100%;
  background-color: rgb(160, 142, 142);
  opacity: 0.5;
  border-radius: 10px;
`;
const WarningConainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  transition-delay: 0.5s;
`;

const WarningContent = styled.div`
  position: absolute;
  top: 40%;
  border-radius: 10px;
  display: flex;
  background-color: ${({ light }) => (light ? `white` : "#343232")};
`;

const WarningTextContent = styled.div`
  padding: 1rem;
`;

const Text = styled.h4`
  margin: 0;
`;

const WarningButtonContr = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
`;

const YesButton = styled.button`
  margin: 0;
  margin-right: 0.5rem;
  border: none;
  border-radius: 3px;
  outline-color: transparent;
  &:hover {
    background-color: rgb(156, 156, 163);
    color: wheat;
  }
`;

const NoButton = styled.button`
  margin: 0;
  background-color: blue;
  border: none;
  color: white;
  border-radius: 3px;
  outline-color: transparent;
  &:hover {
    background-color: transparent;
    color: grey;
  }
`;

export {
  WarningOverLay,
  WarningConainer,
  WarningContent,
  WarningTextContent,
  Text,
  WarningButtonContr,
  YesButton,
  NoButton,
};
