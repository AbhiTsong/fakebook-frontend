import styled from "styled-components";

const ImageInputContiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3rem;
  padding: 0 0.8rem;
`;

const UserProfilePic = styled.img`
  border: 1px solid #ddd;
  border-radius: 50%;
  width: 30px;
  height: 2rem;
`;

const NameAndDotContiner = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 0.5rem;
  height: 2rem;
`;

const PostCreatorName = styled.h4`
  display: flex;
  align-items: center;
  text-transform: capitalize;
  margin: 0;
  color: ${({ light }) => (light ? "" : "aliceblue")};
`;

const PostEditCOntainer = styled.div`
  position: relative;
  height: 0;
`;

const ThreeDots = styled.h3`
  cursor: pointer;
  margin: 0;
  height: 0;
  color: ${({ light }) => (light ? "" : "aliceblue")};
`;

export {
  ImageInputContiner,
  UserProfilePic,
  NameAndDotContiner,
  PostCreatorName,
  PostEditCOntainer,
  ThreeDots,
};
