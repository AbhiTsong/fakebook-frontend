import styled from "styled-components";

const UserProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 55rem;
  margin: auto;
  height: calc(100vh - 3rem);
`;

const UserProfileContent = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0;
  }
`;

const UserTimeLineContainer = styled.div`
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
