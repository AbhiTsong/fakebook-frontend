import styled from "styled-components";

const PosDescription = styled.h5`
  width: 100%;
  text-align: left;
  margin: 5px 0;
  font-weight: lighter;
`;

const CenterPostPic = styled.div`
  height: 23rem;
  width: 100%;
  position: relative;

  @media screen and (max-width: 800px) {
    height: 16rem;
  }
`;

const CenterPostPicBack = styled.div`
  position: absolute;
  height: 23rem;
  width: 100%;
  background-size: cover;
  filter: blur(3px);
  -webkit-filter: blur(3px);

  @media screen and (max-width: 800px) {
    height: 16rem;
  }
`;

const SinglePostPhoto = styled.img`
  max-width: 100%;
  max-height: 100%;
  filter: blur(0);
`;

export { PosDescription, CenterPostPic, CenterPostPicBack, SinglePostPhoto };
