import React from "react";
import { useSelector } from "react-redux";
import { themeSelector } from "../../../Redux/theme/theme.selector";

import {
  SkeletonImgContr,
  SinglePostSkeetonCntr1,
  SinglePostSkeetonCntr2,
  SkeletonIndicator,
} from "./ContactSkeleton.styles";

function ContactsSkeleton() {
  let { light } = useSelector(themeSelector);
  return (
    <SkeletonImgContr light={light}>
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
