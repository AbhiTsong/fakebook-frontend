import styled from "styled-components";

const AddFriendBtn = styled.button`
  display: flex;
  justify-content: space-evenly;
  width: 9rem;
  padding: 0.2rem;
  border-radius: 5px;
  border-color: ${({ light }) => (light ? "transparent" : "")};
  background-color: ${({ light }) => (light ? `lavender` : "#3e3c3c")};
  color: ${({ light }) => (light ? "#3e3c3c" : `white`)};
  cursor: pointer;
  &:focus {
    outline: none;
    outline-color: transparent;
  }

  &:hover {
    background-color: ${({ light }) => (light ? `#d1d1d5` : "#343232")};
  }
`;

const AddFriendImgCtr = styled.div`
  width: 1rem;
`;

const AddFriendIcon = styled.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
`;

export { AddFriendBtn, AddFriendImgCtr, AddFriendIcon };
