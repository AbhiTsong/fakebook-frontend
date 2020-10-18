import styled from "styled-components";

const UserProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 55rem;
  margin: auto;
`;

const UserProfileContent = styled.div`
  width: 100%;
  height: 100%;
  &::-webkit-scrollbar {
    width: 0;
  }
`;

const UserTimeLineContainer = styled.div`
  max-width: 50rem;
  position: relative;
  margin: auto;
`;

const UserPhotosAndPosts = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 0.8rem;
`;

export {
  UserProfileContainer,
  UserProfileContent,
  UserTimeLineContainer,
  UserPhotosAndPosts,
};
