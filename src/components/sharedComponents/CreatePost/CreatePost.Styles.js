import styled from "styled-components";

const CreatePostContainer = styled.div`
  position: relative;
  justify-content: center;
  background-color: #fefefe;
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 30rem;
  z-index: 50;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: animatetop;
  animation-duration: 0.4s;
`;

const CreatePostTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  align-items: center;
  height: 2rem;
`;

const CreatePostTitle = styled.h4`
  margin: 0;
  flex: 1 1;
  text-align: center;
`;

const CreatePostProfilePic = styled.div`
  display: flex;
  padding: 0.5rem 0 0 0.5rem;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
`;

const CreatePostForm = styled.form`
  padding: 0.5rem;
`;

const CreatePostBtn = styled.button``;

export {
  CreatePostContainer,
  CreatePostTitleContainer,
  CreatePostTitle,
  CreatePostProfilePic,
  CreatePostForm,
  CreatePostBtn,
};
