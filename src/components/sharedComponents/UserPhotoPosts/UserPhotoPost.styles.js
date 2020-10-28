import styled from "styled-components";

const UserPhotoPostsCntr = styled.div`
  height: 20.5rem;
  border-radius: 10px;
  background-color: white;
  padding: 1rem;
  margin-bottom: 1rem;
  
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 1.5rem;
  padding: 0 0.8rem;
`;

const Header1 = styled.h4`
  margin: 0;
`;

const Header2 = styled.h5`
  margin: 0;
`;

const ImgPostContr = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ImgPostContent = styled.div`
  width: 5.9rem;
  height: 6rem;
  margin: 0.2rem;
  &:last-child {
    border-bottom-right-radius: 5px;
  }
`;

const ImgPost = styled.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
`;

export {
  UserPhotoPostsCntr,
  TitleContainer,
  Header1,
  Header2,
  ImgPostContr,
  ImgPostContent,
  ImgPost,
};
