import styled from "styled-components";

const ReactionCount = styled.div`
  display: flex;
  padding: 0.5rem;
  justify-content: space-between;
  color: ${({ light }) => (light ? "" : "aliceblue")};
`;

const ThumbsUpContainer = styled.div`
  width: 1.5rem;
  padding-right: 0.5rem;
`;

const ThumbsUp = styled.img`
  display: block;
  max-width: 100%;
  max-width: 100%;
`;

const CommentPeople = styled.div`
  display: flex;
  width: 100%;
  padding: 0 0.5rem;
  justify-content: space-between;
`;

export { ReactionCount, ThumbsUpContainer, ThumbsUp, CommentPeople };
