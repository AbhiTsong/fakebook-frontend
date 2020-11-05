import styled from "styled-components";

const AddPostContainer = styled.div`
  color: black;
`;

const SinglePostContainer = styled.div`
  margin: 1.5rem 0;
  background-color: ${({ light }) => (light ? `white` : `#3e3c3c`)};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 10px;
  width: 100%;

  @media screen and (max-width: 800px) {
    border-radius: 0;
  }
`;

const PostEndTxtCntr = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  background-color: white;
  margin: 0.5rem;
  font-weight: bolder;
`;

const PaginatingBtnCntr = styled.div`
  display: flex;
  justify-content: center;
  height: 5rem;
  padding: 0.5rem;
`;

const PaginatingBtns = styled.button`
  width: 100%;
  background-color: #1877f2;
  height: 3rem;
  border-radius: 5px;
  outline-color: transparent;
  border: none;
  color: white;
  font-weight: bolder;
  cursor: pointer;
  &::focus {
    outline: none;
  }
  &:hover {
    background-color: #4b97f9;
  }
  &:nth-child(2) {
    margin-left: 0.5rem;
  }
`;

const SinglePostContent = styled.div`
  text-align: center;
  width: 100%;
  height: 24rem;
  @media screen and (max-width: 800px) {
    height: 16rem;
  }
`;

const CenterPostText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 15rem;
  margin: 0;
  padding: 0.5rem;
`;

const SinglrPostText = styled.p`
  font-size: 1.5rem;
  margin: 0;
  width: 100%;
  padding: 1rem;
  line-height: 2.5rem;
  color: ${({ light }) => (light ? "" : "aliceblue")};
`;

const CommentContainer = styled.div`
  padding: 0.5rem;
`;

export {
  AddPostContainer,
  SinglePostContainer,
  PostEndTxtCntr,
  PaginatingBtns,
  PaginatingBtnCntr,
  SinglePostContent,
  CenterPostText,
  SinglrPostText,
  CommentContainer,
};
