import React, { useState, useEffect } from "react";
import Skeleton from "../../Skeleton/AllPostsSkeleton/Skeleton";
import Construction from "./Construction/Construction";

// Styled Import
import { VideoCntr } from "./Video.styles";

function Video() {
  const [skeleton, setSkeleton] = useState(true);

  useEffect(() => {
    let video = setTimeout(() => {
      setSkeleton(false);
    }, 10000);
    return () => {
      clearTimeout(video);
    };
  }, []);

  return (
    <VideoCntr>
      {skeleton ? (
        [...Array(10).keys()].map((e, idx) => <Skeleton key={e + idx} />)
      ) : (
        <Construction />
      )}
    </VideoCntr>
  );
}

export default Video;
