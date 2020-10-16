import React, { useState, useEffect } from "react";
import Skeleton from "../../Skeleton/AllPostsSkeleton/Skeleton";
import Construction from "./Construction/Construction";
import "./Video.styles.scss";

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
    <div
      className="Video"
      style={{
        width: "80%",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {skeleton ? (
        [...Array(10).keys()].map((e, idx) => <Skeleton key={e + idx} />)
      ) : (
        <Construction />
      )}
    </div>
  );
}

export default Video;
