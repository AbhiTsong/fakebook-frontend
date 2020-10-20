import styled from "styled-components";

const NameAndBtnCtr = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 12rem;
  margin-left: 2rem;
`;

const RequesterName = styled.h5`
  margin: 0;
  text-transform: capitalize;
  color: black;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

const AcceptBtn = styled.button`
  width: 5rem;
  margin-right: 0.5rem;
  border: none;
  border-radius: 3px;
  outline-color: transparent;
  padding: 0.5rem 1rem;
  &:hover {
    background-color: rgb(156, 156, 163);
  }
`;

const DeleteButton = styled.div`
  width: 5rem;
  background-color: blue;
  border: none;
  color: white;
  border-radius: 3px;
  outline-color: transparent;
  padding: 0.5rem 1rem;
  &:hover {
    background-color: rgb(75, 75, 221);
    color: white;
  }
`;

export { NameAndBtnCtr, RequesterName, BtnContainer, AcceptBtn, DeleteButton };
