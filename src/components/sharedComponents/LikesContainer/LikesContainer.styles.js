import styled from "styled-components";

const LikeContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 0.5rem;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
  color: ${({ like }) => (like ? "" : "aliceblue")};
`;

const CommentIconCntr = styled.span`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const ContainerIcn = styled.img`
  margin-right: 0.5rem;
  width: 17px;
`;

export { LikeContainer, CommentIconCntr, ContainerIcn };
