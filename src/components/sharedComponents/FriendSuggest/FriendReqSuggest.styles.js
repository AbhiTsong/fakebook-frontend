import styled from "styled-components";

const FriendReqContr = styled.div`
  background-color: ${({light}) => light ? "white" : "#3e3c3c"};
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 10px;
  box-shadow: rgba(43, 44, 44, 0.2) 0px 4px 8px 0px,
    rgba(43, 44, 44, 0.19) 0px 6px 20px 0px;
`;

const FrinedSuggHeader = styled.h4`
  margin: 0;
  margin-bottom: 1rem;
`;

const SuggestNameAndCrd = styled.div`
  display: flex;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    width: 0;
    margin: 0.5rem;
  }
`;

const FriendSuggestContr = styled.div`
  display: inline-block;
  border-radius: 10px;
  margin-right: 1rem;
  box-shadow: rgba(43, 44, 44, 0.2) 0px 4px 8px 0px,
    rgba(43, 44, 44, 0.19) 0px 6px 20px 0px;
  margin-bottom: 0.5rem;
`;

const SuggestNameAndBtn = styled.div`
  display: flex;
  padding: 0.5rem;
  flex-direction: column;
  align-items: center;
`;

const SuggestedPerson = styled.h5`
  margin: 0;
  color: black;
  text-transform: capitalize;
  margin-bottom: 0.5rem;
`;

const NoFriendSuggestion = styled.div`
  display: flex;
  height: 7rem;
  display: flex;
  padding-top: 5rem;
  text-align: center;
  margin: auto;
  font-size: 1.5rem;
  color: black;
  font-style: oblique;
`;

export {
  FriendReqContr,
  FrinedSuggHeader,
  SuggestNameAndCrd,
  FriendSuggestContr,
  SuggestNameAndBtn,
  SuggestedPerson,
  NoFriendSuggestion,
};
