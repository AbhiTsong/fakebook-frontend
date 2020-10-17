import styled from "styled-components";

const MessageHeader = styled.div`
  position: absolute;
  top: 5rem;
  right: 1rem;
  height: 5vh;
  background-color: white;
  z-index: 100;
  width: 20rem;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
`;

const HeaderText = styled.h2`
  margin: 0;
  height: 0;
`;
const HeaderDots = styled.span`
  height: 0;
  font-weight: bolder;
  color: gray;
`;

const MessageContainer = styled.div`
  position: absolute;
  top: 7.5rem;
  right: 1rem;
  height: 80vh;
  background-color: white;
  padding: 0 1rem;
  z-index: 100;
  width: 20rem;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  overflow-y: scroll;
`;

const MessageImageAndText = styled.div`
  display: flex;
  padding: 0.5rem;

  &:hover {
    background-color: lavender;
    border-radius: 15px;
  }
`;

const MessageImageContainer = styled.div`
  display: block;
`;

const MessageImage = styled.img`
  width: 3rem;
  height: 3rem;
  object-fit: cover;
  border-radius: 50%;
`;

const MessageTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 4rem;
  width: 14rem;
  margin-left: 0.8rem;
`;

const MessengerName = styled.h5`
  margin: 0;
`;

const MessageItself = styled.div`
  margin: 0;
  color: blue;
`;

const MessagedDate = styled.h6`
  margin: 0;
  color: rgb(180, 171, 171);
`;

export {
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
};
