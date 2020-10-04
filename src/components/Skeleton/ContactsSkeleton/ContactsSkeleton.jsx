import React from "react";
import "./ContactsSkeleton.styles.scss";

function ContactsSkeleton() {
  return (
    <div className="Skeleton_Image_Container">
      <div className="Single_Post_Skeleton_Container">
        <div className="Skeleton_Indicator" />
      </div>
      <div className="Single_Post_Skeleton_Container_Two">
        <div className="Skeleton_Indicator" />
      </div>
      <div className="Single_Post_Skeleton_Container">
        <div className="Skeleton_Indicator" />
      </div>
      <div className="Single_Post_Skeleton_Container_Two">
        <div className="Skeleton_Indicator" />
      </div>
    </div>
  );
}

export default ContactsSkeleton;
