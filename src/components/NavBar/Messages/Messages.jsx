import React, { useState, useEffect } from "react";
import "./Messages.styles.scss";
import ContactsSkeleton from "../../Skeleton/ContactsSkeleton/ContactsSkeleton";
import { messageData } from "../../../statics/statics";

function Messages() {
  const [showSkeleton, setSkeleton] = useState(true);

  useEffect(() => {
    let time = setTimeout(() => {
      setSkeleton(false);
    }, 5000);
    return () => {
      clearTimeout(time);
    };
  }, []);

  return (
    <>
      <div className="Messages_Header">
        <h2 className="Messages_Header_Text">Messages</h2>
        <span className="Messages_Dots">...</span>
      </div>
      <div className="Messages_Container">
        {showSkeleton
          ? [...Array(10).keys()].map((e, idx) => (
              <ContactsSkeleton key={idx + e} />
            ))
          : messageData.map((data) => (
              <div
                key={data.name + data.time}
                className="Messages_Image_Text_Container"
              >
                <div className="Messages_Image_Container">
                  <img
                    className="Profile_Pic"
                    alt="User Profile"
                    src={data.image}
                  />
                </div>
                <div className="Messages_Container_Text">
                  <h5 className="Messages_Sender">{`${data.name}`}</h5>
                  <h6 className="Messages_Text">{`${data.description}`}</h6>
                  <h6 className="Time_Container">{data.time}</h6>
                </div>
              </div>
            ))}
      </div>
    </>
  );
}

export default Messages;
