import React, { useState, useEffect } from "react";
// import "./Notification.styles.scss";
import { useDispatch } from "react-redux";
import { staticData } from "../../../statics/statics";

// Img Import 
import Close from "../../../Assets/images/close.png"

// Redux Imports
import { notificationAction } from "../../../Redux/Notification/Notification.action";
import { showToster } from "../../../Redux/toster/toster.action";

import ContactsSkeleton from "../../Skeleton/ContactsSkeleton/ContactsSkeleton";

// Styled Imports
import {
  Parent,
  MessageHeader,
  HeaderText,
  HeaderClose,
  CloseIcon,
  MessageContainer,
  MessageImageAndText,
  MessageImageContainer,
  MessageImage,
} from "../Messages/Message.Styles";

import {
  DescriptonButtonContainer,
  DescriptionText,
  DescriptionSpan,
  TimeContainer,
  ButtonsContainer,
  AcceptButton,
  DeclineButton,
} from "./Notification.Styles";

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

  function closeMessage(){
    dispatch(notificationAction(false))
  }

  return (
    <Parent>
      <MessageHeader>
        <HeaderText className="Notification_Header_Text">
          Notifications
        </HeaderText>
        <HeaderClose onClick={closeMessage}>
          <CloseIcon src={Close} />
        </HeaderClose>
      </MessageHeader>
      <MessageContainer>
        {showSkeleton
          ? [...Array(10).keys()].map((e, idx) => (
              <ContactsSkeleton key={e + idx} />
            ))
          : staticData.map((data, idx) => (
              <MessageImageAndText key={idx + data}>
                <MessageImageContainer>
                  <MessageImage src={data.image} />
                </MessageImageContainer>
                <DescriptonButtonContainer>
                  {
                    <>
                      <DescriptionText>
                        <DescriptionSpan className="User_Name">{`${data.name} `}</DescriptionSpan>{" "}
                        {`${data.description}`}
                      </DescriptionText>

                      <TimeContainer className="Time_Container">
                        {data.time}
                      </TimeContainer>
                      {data.buttons ? (
                        <ButtonsContainer>
                          <AcceptButton
                            onClick={handleDispatch}
                            className="Accept_Button"
                          >
                            Accept
                          </AcceptButton>
                          <DeclineButton
                            onClick={handleDispatch}
                            className="Decline_Button"
                          >
                            Decline
                          </DeclineButton>
                        </ButtonsContainer>
                      ) : (
                        ""
                      )}
                    </>
                  }
                </DescriptonButtonContainer>
              </MessageImageAndText>
            ))}
      </MessageContainer>
    </Parent>
  );
}

export default Notification;
