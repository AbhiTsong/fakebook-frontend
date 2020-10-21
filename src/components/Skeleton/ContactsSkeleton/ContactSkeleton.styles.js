import styled, { keyframes } from "styled-components";

const SkeletonAnimation1 = keyframes`
  from {
    transform: translate(0);
  }

  to {
    transform: translate(100%);
  }
`;

const SkeletonAnimation2 = keyframes`
  from {
    transform: translate(0);
  }

  to {
    transform: translate(100%);
  }
`;

const SkeletonImgContr = styled.div`
  margin: 1.5rem 0;
  border-radius: 10px;
  width: 100%;
  height: 5rem;
  overflow: hidden;
  position: relative;

  &:hover {
    background-color: rgba(221, 221, 230, 0.479);
    border-radius: 10px;
  }
`;

const SinglePostSkeetonCntr1 = styled.div`
  transform: translate(100%);
  animation: 1s ${SkeletonAnimation1} linear infinite;
  width: 100%;
  height: 10%;
`;

const SinglePostSkeetonCntr2 = styled.div`
  transform: translate(100%);
  animation: 1s ${SkeletonAnimation2} linear infinite;
  width: 100%;
  height: 10%;
`;

const SkeletonIndicator = styled.div`
  width: 100%;
  margin-top: 0.5rem;
  height: 100%;
  border-radius: 10px;
  background: rgb(9, 121, 114);
  background: -moz-linear-gradient(
    138deg,
    rgba(230, 235, 234, 0.452) 0%,
    rgba(224, 217, 224, 0.623) 27%,
    rgba(197, 201, 224, 0.596) 91%
  );
  background: -webkit-linear-gradient(
    138deg,
    rgba(215, 221, 221, 0.628) 0%,
    rgba(238, 234, 238, 0.548) 27%,
    rgba(197, 201, 224, 0.507) 91%
  );
  background: linear-gradient(
    138deg,
    rgba(181, 190, 190, 0.397) 0%,
    rgba(231, 224, 231, 0.39) 27%,
    rgba(228, 229, 235, 0.534) 91%
  );
  filter: progid:DXImageTransform.Microsoft
    .gradient(startColorstr="#097972",
    endColorstr="#c5c9e0",GradientType=1);
`;

export {
  SkeletonImgContr,
  SinglePostSkeetonCntr1,
  SinglePostSkeetonCntr2,
  SkeletonIndicator,
};
