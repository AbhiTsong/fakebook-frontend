import React from "react";
import "./Messages.styles.scss";
import ContactsSkeleton from "../../Skeleton/ContactsSkeleton/ContactsSkeleton";
// import { staticData } from "../../../statics/statics";

function Messages() {
  return (
    <>
      <div className="Messages_Header">
        <h2 className="Messages_Header_Text">Messages</h2>
        <span className="Messages_Dots">...</span>
      </div>
      <div className="Messages_Container">
        {[...Array(10).keys()].map((e, idx) => (
          <ContactsSkeleton keys={idx} />
        ))}
        {/* {staticData.map((data) => (
          <div className="Notification_Image_Text_Container">
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
                      <button className="Accept_Button">Accept</button>
                      <button className="Decline_Button">Decline</button>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              }
            </div>
          </div>
        ))} */}
      </div>
    </>
  );
}

export default Messages;
