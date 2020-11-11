import styled from "styled-components";
import { ScrollStyles } from "../../../theme/components/container";

const Parent = styled.div`
  position: absolute;
  top: 3.5rem;
  right: 1rem;
  z-index: 21;
  width: 20rem;
  height: 85vh;
  border-radius: 5px;
  color: ${({ light }) => (light ? "#3e3c3c" : `white`)};
  background-color: ${({ light }) => (light ? "whitesmoke" : "#343232")};
  box-shadow: rgba(43, 44, 44, 0.2) 0px 4px 8px 0px,
    rgba(43, 44, 44, 0.19) 0px 6px 20px 0px;

  @media screen and (max-width: 800px) {
    border-top: 1px solid gray;
    margin-right: 0;
    border-radius: 0;
    width: 96%;
    top: 3rem;
  }

  @media screen and (max-width: 550px) {
    width: 92%;
  }
`;

const MessageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  align-items: baseline;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
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

const HeaderClose = styled.div`
  width: 1rem;
  height: 1rem;
  cursor: pointer;
`;

const CloseIcon = styled.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
  background-color: white;
  border-radius: 50%;
`;

const MessageContainer = styled.div`
  padding: 0 1rem;
  overflow-y: scroll;
  height: 80vh;
  overflow-y: scroll;
  ${ScrollStyles}
`;

const MessageImageAndText = styled.div`
  display: flex;
  padding: 0.5rem;

  &:hover {
    background-color: ${({ light }) =>
      light ? "rgb(188, 188, 207)" : "#3e3c3c"};
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
  Parent,
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
};
