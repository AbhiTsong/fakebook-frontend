import styled from "styled-components";

const UserProfileContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 55rem;
  margin: auto;
`;

const UserProfileContent = styled.div`
  width: 100%;
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
