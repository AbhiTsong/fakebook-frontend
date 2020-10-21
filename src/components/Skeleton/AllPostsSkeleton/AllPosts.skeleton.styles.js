import styled, { keyframes } from "styled-components";



const AllPostSkeletonCntr = styled.div`
  margin: 1.5rem 0;
  background-color: rgba(255, 255, 255, 0.301);
  // box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 10px;
  width: 100%;
  height: 25rem;
  overflow: hidden;
  position: relative;
  &:hover {
    background-color: rgb(215, 215, 224);
  }
`;

const Animate1 = keyframes`
  from {
    transform: translate(0);
  }

  to {
    transform: translate(100%);
  }
`;

const SinglePostSkeleton = styled.div`
  transform: translate(100%);
  animation: 1s ${Animate1} linear infinite;
  width: 100%;
  height: 5%;
`;

const Animate2 = keyframes`
  from {
    transform: translate(0);
  }

  to {
    transform: translate(100%);
  }
`;

const SinglePostSkeleton2 = styled.div`
  transform: translate(100%);
  animation: 1.5s ${Animate2} linear infinite;
  width: 100%;
  height: 10%;
`;

const Animate3 = keyframes`
  from {
    transform: translate(0);
  }

  to {
    transform: translate(100%);
  }
`;
const SinglePostSkeleton3 = styled.div`
  transform: translate(100%);
  animation: 2s ${Animate3} linear infinite;
  width: 100%;
  height: 8%;
`;

const Animate4 = keyframes`
  from {
    transform: translate(0);
  }

  to {
    transform: translate(100%);
  }
`;

const SinglePostSkeleton4 = styled.div`
  transform: translate(100%);
  animation: 1s ${Animate4} linear infinite;
  width: 100%;
  height: 5%;
`;

const Animation5 = keyframes`
  from {
    transform: translate(0);
  }

  to {
    transform: translate(100%);
  }
`;

const SinglePostSkeleton5 = styled.div`
  transform: translate(100%);
  animation: 1.5s ${Animation5} linear infinite;
  width: 100%;
  height: 10%;
`;

const Animation6 = keyframes`
  from {
    transform: translate(0);
  }

  to {
    transform: translate(100%);
  }u
`;

const SinglePostSkeleton6 = styled.div`
  transform: translate(100%);
  animation: 2s ${Animation6} linear infinite;
  width: 100%;
  height: 7%;
`;

const Animate7 = keyframes`
 from {
    transform: translate(0);
  }

  to {
    transform: translate(100%);
  }
`;

const SinglePostSkeleton7 = styled.div`
  transform: translate(100%);
  animation: 1s ${Animate7} linear infinite;
  width: 100%;
  height: 9%;
`;

const Animate8 = keyframes`
  from {
    transform: translate(0);
  }

  to {
    transform: translate(100%);
  }
`;
const SinglePostSkeleton8 = styled.div`
  transform: translate(100%);
  animation: 1.5s ${Animate8} linear infinite;
  width: 100%;
  height: 7%;
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
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#097972",endColorstr="#c5c9e0",GradientType=1);
`;

export {
  AllPostSkeletonCntr,
  SinglePostSkeleton,
  SinglePostSkeleton2,
  SinglePostSkeleton3,
  SinglePostSkeleton4,
  SinglePostSkeleton5,
  SinglePostSkeleton6,
  SinglePostSkeleton7,
  SinglePostSkeleton8,
  SkeletonIndicator,
};
