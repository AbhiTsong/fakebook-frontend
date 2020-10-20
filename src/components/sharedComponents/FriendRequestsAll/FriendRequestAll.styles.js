import styled from "styled-components";

const FriendRequestContainer = styled.div`
  position: relative;
  justify-content: center;
  background-color: #fefefe;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 13rem;
  width: 40rem;
  height: 36rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: animatetop;
  animation-duration: 0.4s;
`;

const FrinedReqHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
`;

const HeaderText = styled.h4`
  margin: 0;
  margin-top: 0.5rem;
`;

const FriendReqAll = styled.div`
  overflow-y: scroll;
  height: 31rem;
  padding: 0.5rem;
  margin-left: 7rem;
`;

const FriendReqIndi = styled.div`
  display: flex;
  margin: 0.5rem;
  width: 19rem;
  padding: 0.5rem;
  &:hover {
    background-color: lavender;
    border-radius: 5px;
  }
`;

export {
  FriendRequestContainer,
  FrinedReqHeader,
  HeaderText,
  FriendReqAll,
  FriendReqIndi,
};
