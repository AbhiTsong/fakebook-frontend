import styled from "styled-components";


const IndiCommentContr = styled.div`
  margin: 0.5rem;
`;

const CommentCntr = styled.div`
  display: flex;
`;

const UserProfilePIc = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 2rem;
  border-radius: 50%;
`;

const Comments = styled.div`
  width: auto;
  padding: 0.8rem;
  background-color: lavender;
  border-radius: 1.2rem;
`;

const CommentPerson = styled.p`
  margin: 0;
  font-size: 0.8rem;
  font-weight: bold;
  text-transform: capitalize;
  margin-bottom: 0.5rem;
`;

const PersonsComment = styled.p`
  margin: 0;
  font-size: 0.9rem;
  font-weight: lighter;
`;

export {
  IndiCommentContr,
  CommentCntr,
  UserProfilePIc,
  Comments,
  CommentPerson,
  PersonsComment,
};
