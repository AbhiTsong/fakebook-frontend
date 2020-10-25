import styled from "styled-components";

const PosDescription = styled.h5`
  width: 100%;
  text-align: left;
  margin: 5px 0;
  padding-left: 1rem;
  font-weight: lighter;
`;

const CenterPostPic = styled.div`
  height: ${({ width }) => (width < 800 ? "16rem" : "23rem")};
  width: 100%;
  position: relative;
`;

const CenterPostPicBack = styled.div`
  position: absolute;
  height: ${({ width }) => (width < 800 ? "16rem" : "23rem")};
  width: 100%;
  background-size: cover;
  filter: blur(3px);
  -webkit-filter: blur(3px);
`;

const SinglePostPhoto = styled.img`
  max-width: 100%;
  max-height: 100%;
  filter: blur(0);
`;

export { PosDescription, CenterPostPic, CenterPostPicBack, SinglePostPhoto };
