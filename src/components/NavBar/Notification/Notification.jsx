import React, { useState, useEffect } from "react";
// import "./Notification.styles.scss";
import { useDispatch } from "react-redux";
import { staticData } from "../../../statics/statics";

// Redux Imports
import { showToster } from "../../../Redux/toster/toster.action";

import ContactsSkeleton from "../../Skeleton/ContactsSkeleton/ContactsSkeleton";

// Styled Imports
import {
  Parent,
  MessageHeader,
  HeaderText,
  HeaderDots,
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

  return (
    <Parent>
      <MessageHeader>
        <HeaderText className="Notification_Header_Text">
          Notifications
        </HeaderText>
        <HeaderDots className="Notification_Dots">...</HeaderDots>
      </MessageHeader>
      <MessageContainer>
        {showSkeleton
          ? [...Array(10).keys()].map((e, idx) => (
              <ContactsSkeleton key={e + idx} />
            ))
          : staticData.map((data) => (
              <MessageImageAndText>
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
