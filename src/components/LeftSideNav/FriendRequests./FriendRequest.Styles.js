import styled from "styled-components";

const FriendReqContr = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  padding-left: ${({ width }) => (width < 800 ? "" : "0.5rem")};
  height: ${({ width }) => (width < 800 ? "1.5rem" : "3rem")};
  margin: ${({ width }) => (width < 800 ? "1rem 0" : "")};
  &:hover {
    background-color: rgb(197, 197, 207);
    border-radius: 10px;
  }
`;

const FriendReqLogoCtr = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  padding-left: ${(props) => (props.width > 800 ? "0.5rem" : "0")};
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
  margin-bottom: 1rem;
  cursor: pointer;
  margin-top: -1rem;
  margin-left: ${({ width }) => (width < 800 ? "2.5rem" : "3rem")};
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
