import styled from "styled-components";

const FriendReqContr = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  height: 3rem;
  &:hover {
    background-color: rgb(197, 197, 207);
    border-radius: 10px;
  }
`;

const FriendReqLogoCtr = styled.div`
  width: 1.5rem;
  padding-left: 0.5rem;
`;
const FriendReqLogo = styled.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
`;

const RequestCountContr = styled.div`
  // display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
`;
const ReqText = styled.h5`
  margin: 0;
  padding-left: 1rem;
  justify-content: center;
`;

const ReqCount = styled.h6`
  margin: 0;
  display: flex;
  color: blue;
  margin-top: -1rem;
  margin-left: 3rem;
  margin-bottom: 1rem;
  cursor: pointer;
`;

const ReqCountDot = styled.span`
  margin-top: 0.2rem;
  width: 0.4rem;
  height: 0.4rem;
  background-color: blue;
  border-radius: 50%;
  justify-content: center;
  margin-right: 0.4rem;
`;

export {
  FriendReqContr,
  FriendReqLogoCtr,
  FriendReqLogo,
  RequestCountContr,
  ReqText,
  ReqCount,
  ReqCountDot,
};
