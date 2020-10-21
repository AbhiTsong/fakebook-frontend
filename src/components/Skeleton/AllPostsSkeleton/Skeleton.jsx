import React from "react";
// import "./Skeleton.styles.scss";

// Styled Imports
import {
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
} from "./AllPosts.skeleton.styles";

function Skeleton() {
  return (
    <AllPostSkeletonCntr>
      <SinglePostSkeleton>
        <SkeletonIndicator />
      </SinglePostSkeleton>
      <SinglePostSkeleton2>
        <SkeletonIndicator />
      </SinglePostSkeleton2>
      <SinglePostSkeleton3>
        <SkeletonIndicator />
      </SinglePostSkeleton3>
      <SinglePostSkeleton4>
        <SkeletonIndicator />
      </SinglePostSkeleton4>
      <SinglePostSkeleton5>
        <SkeletonIndicator />
      </SinglePostSkeleton5>
      <SinglePostSkeleton6>
        <SkeletonIndicator />
      </SinglePostSkeleton6>
      <SinglePostSkeleton7>
        <SkeletonIndicator />
      </SinglePostSkeleton7>
      <SinglePostSkeleton8>
        <SkeletonIndicator />
      </SinglePostSkeleton8>
      <SinglePostSkeleton5>
        <SkeletonIndicator />
      </SinglePostSkeleton5>
      <SinglePostSkeleton8>
        <SkeletonIndicator />
      </SinglePostSkeleton8>
      <SinglePostSkeleton5>
        <SkeletonIndicator />
      </SinglePostSkeleton5>
    </AllPostSkeletonCntr>
  );
}

export default Skeleton;
