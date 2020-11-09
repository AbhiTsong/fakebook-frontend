import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Redux Imports
import { messageAction } from "../../../Redux/Message/Message.Action";
import { themeSelector } from "../../../Redux/theme/theme.selector";

// Nested Components
import ContactsSkeleton from "../../Skeleton/ContactsSkeleton/ContactsSkeleton";
import { messageData } from "../../../statics/statics";

// Image Import
import Close from "../../../Assets/images/close.png";

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
  MessageTextContainer,
  MessengerName,
  MessageItself,
  MessagedDate,
} from "./Message.Styles";

function Messages() {
  const { light } = useSelector(themeSelector);
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
    <Parent light={light}>
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
              <MessageImageAndText light={light} key={data.name + data.time}>
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
    </Parent>
  );
}

export default Messages;
