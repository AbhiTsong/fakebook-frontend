import React, { useState, useEffect } from "react";
import ContactsSkeleton from "../../Skeleton/ContactsSkeleton/ContactsSkeleton";
import { messageData } from "../../../statics/statics";

// Styled Imports
import {
  MessageHeader,
  HeaderText,
  HeaderDots,
  MessageContainer,
  MessageImageAndText,
  MessageImageContainer,
  MessageImage,
  MessageTextContainer,
  MessengerName,
  MessageItself,
  MessagedDate,
} from "./Message.Styles";

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
      <MessageHeader>
        <HeaderText className="Messages_Header_Text">Messages</HeaderText>
        <HeaderDots className="Messages_Dots">...</HeaderDots>
      </MessageHeader>
      <MessageContainer>
        {showSkeleton
          ? [...Array(10).keys()].map((e, idx) => (
              <ContactsSkeleton key={idx + e} />
            ))
          : messageData.map((data) => (
              <MessageImageAndText key={data.name + data.time}>
                <MessageImageContainer>
                  <MessageImage src={data.image} />
                </MessageImageContainer>
                <MessageTextContainer>
                  <MessengerName>{`${data.name}`}</MessengerName>
                  <MessageItself>{`${data.description}`}</MessageItself>
                  <MessagedDate>{data.time}</MessagedDate>
                </MessageTextContainer>
              </MessageImageAndText>
            ))}
      </MessageContainer>
    </>
  );
}

export default Messages;
