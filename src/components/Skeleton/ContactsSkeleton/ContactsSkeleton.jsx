import React from "react";

import {
  SkeletonImgContr,
  SinglePostSkeetonCntr1,
  SinglePostSkeetonCntr2,
  SkeletonIndicator,
} from "./ContactSkeleton.styles";

function ContactsSkeleton() {
  return (
    <SkeletonImgContr>
      <SinglePostSkeetonCntr1>
        <SkeletonIndicator />
      </SinglePostSkeetonCntr1>
      <SinglePostSkeetonCntr2>
        <SkeletonIndicator />
      </SinglePostSkeetonCntr2>
      <SinglePostSkeetonCntr1>
        <SkeletonIndicator />
      </SinglePostSkeetonCntr1>
      <SinglePostSkeetonCntr2>
        <SkeletonIndicator />
      </SinglePostSkeetonCntr2>
    </SkeletonImgContr>
  );
}

export default ContactsSkeleton;
