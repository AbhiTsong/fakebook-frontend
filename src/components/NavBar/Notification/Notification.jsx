import React, { useState, useEffect } from "react";
import "./Notification.styles.scss";
import { useDispatch } from "react-redux";
import { staticData } from "../../../statics/statics";

// Redux Imports
import { showToster } from "../../../Redux/toster/toster.action";

import ContactsSkeleton from "../../Skeleton/ContactsSkeleton/ContactsSkeleton";

function Notification() {
  const [showSkeleton, setSkeleton] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    let time = setTimeout(() => {
      setSkeleton(false);
    }, 5000);
    return () => {
      clearTimeout(time);
    };
  }, []);

  function handleDispatch() {
    dispatch(
      showToster(
        "This is a static data and is not being fetched from the backend"
      )
    );
  }

  return (
    <>
      <div className="Notification_Header">
        <h2 className="Notification_Header_Text">Notifications</h2>
        <span className="Notification_Dots">...</span>
      </div>
      <div className="Notification_Container">
        {showSkeleton
          ? [...Array(10).keys()].map((e, idx) => (
              <ContactsSkeleton key={e + idx} />
            ))
          : staticData.map((data) => (
              <div
                key={data.name + data.time}
                className="Notification_Image_Text_Container"
              >
                <div className="Notification_Image_Container">
                  <img
                    className="Profile_Pic"
                    alt="User Profile"
                    src={data.image}
                  />
                </div>
                <div className="Notification_Button_Text">
                  {
                    <div className="Description_Continer">
                      <h5 className="Description_Text">
                        <span className="User_Name">{`${data.name} `}</span>{" "}
                        {`${data.description}`}
                      </h5>

                      <h6 className="Time_Container">{data.time}</h6>
                      {data.buttons ? (
                        <div className="Buttons_Container">
                          <button
                            onClick={handleDispatch}
                            className="Accept_Button"
                          >
                            Accept
                          </button>
                          <button
                            onClick={handleDispatch}
                            className="Decline_Button"
                          >
                            Decline
                          </button>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  }
                </div>
              </div>
            ))}
      </div>
    </>
  );
}

export default Notification;
