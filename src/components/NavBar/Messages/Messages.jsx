import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

// Redux Imports
import { messageAction } from "../../../Redux/Message/Message.Action";

// Nested Components
import ContactsSkeleton from "../../Skeleton/ContactsSkeleton/ContactsSkeleton";
import { messageData } from "../../../statics/statics";

// Image Import
import Close from "../../../Assets/images/close.png";

// Styled Imports
import {
  MessageHeader,
  HeaderText,
  HeaderDots,
  HeaderClose,
  CloseIcon,
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
  const dispatch = useDispatch();
  const [showSkeleton, setSkeleton] = useState(true);

  useEffect(() => {
    let time = setTimeout(() => {
      setSkeleton(false);
    }, 5000);
    return () => {
      clearTimeout(time);
    };
  }, []);

  function closeMessage() {
    dispatch(messageAction());
  }

  return (
    <>
      <MessageHeader>
        <HeaderText className="Messages_Header_Text">Messages</HeaderText>
        {/* All done */}
          <HeaderClose onClick={closeMessage}>
            <CloseIcon src={Close} />
          </HeaderClose>
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
