import React, { useState } from "react";
import Skeleton from "../../Skeleton/AllPostsSkeleton/Skeleton";
import Construction from "./Construction/Construction";
import "./Video.styles.scss"

function Video() {
  const [skeleton, setSkeleton] = useState(true);

  setTimeout(() => {
    setSkeleton(false);
  }, 10000);

  return (
    <div
    className="Video"
    style={{ width: "80%", margin: "auto", display: "flex", flexDirection: "column" }}>
      {skeleton ? (
        [...Array(10).keys()].map(() => <Skeleton />)
      ) : (
        <Construction />
      )}
    </div>
  );
}

export default Video;
