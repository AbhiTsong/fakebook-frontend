import styled from "styled-components";

const AddPostContainer = styled.div`
  color: black;
`;

const SinglePostContainer = styled.div`
  margin: 1.5rem 0;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: ${({ width }) => (width < 800 ? "" : "10px")};
  width: 100%;
`;

const SinglePostContent = styled.div`
  text-align: center;
  width: 100%;
  height: ${({ width }) => (width < 800 ? "16rem" : "24rem")};
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
`;

const CommentContainer = styled.div`
  padding: 0.5rem;
`;

export {
  AddPostContainer,
  SinglePostContainer,
  SinglePostContent,
  CenterPostText,
  SinglrPostText,
  CommentContainer,
};
