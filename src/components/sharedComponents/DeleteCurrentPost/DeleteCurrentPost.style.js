import styled from "styled-components";

const DeleteModalContainer = styled.div`
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width: 40rem;
  height: 9rem;
  z-index: 200;
  color: ${({ light }) => (light ? "#3e3c3c" : `white`)};
  background-color: ${({ light }) => (light ? "whitesmoke" : "#343232")};
`;

const TitileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  align-items: center;
`;

const DeleteTitleText = styled.h4`
  margin: 0;
`;

const DeleteMessage = styled.h6`
  margin: 0.5rem 1rem;
  font-size: 0.9rem;
`;

const DeleteBtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0.5rem 1rem;
  height: 2rem;
`;

const CancleBtn = styled.button`
  margin: 0;
  margin-right: 0.5rem;
  border: none;
  border-radius: 3px;
  outline-color: transparent;
  width: 5rem;
  &:hover {
    background-color: rgb(222, 222, 233);
    cursor: pointer;
    color: blue;
  }
`;

const DeleteBtn = styled.button`
  margin: 0;
  background-color: blue;
  border: none;
  color: white;
  border-radius: 3px;
  outline-color: transparent;
  width: 5rem;
  &:hover {
    background-color: rgb(73, 73, 230);
    cursor: pointer;
  }
`;

export {
  DeleteModalContainer,
  TitileContainer,
  DeleteTitleText,
  DeleteMessage,
  DeleteBtnContainer,
  CancleBtn,
  DeleteBtn,
};
