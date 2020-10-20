import styled from "styled-components";

const AddFriendBtn = styled.button`
  display: flex;
  justify-content: space-evenly;
  width: 9rem;
  padding: 0.2rem;
  border-color: transparent;
  background-color: lavender;
  border-radius: 5px;
  &:focus {
    outline: none;
    outline-color: transparent;
  }

  &:hover {
    background-color: rgb(185, 185, 196);
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
