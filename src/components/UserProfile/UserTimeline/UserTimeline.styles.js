import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const TimelineRelative = css`
  width: 100%;
  z-index: 500;
  display: flex;
  justify-content: space-evenly;
  padding: 0.5rem;
  background-color: white;
  margin-top: 0.5rem;
  border-radius: 5px;
`;

// const TimelineFixed = css`
//   position: fixed;
//   top: 0;
//   margin-top: 0;
//   margin: 0;
//   z-index: 500;
//   width: 44.9vw;
//   display: flex;
//   justify-content: space-evenly;
//   padding: 0.5rem;
//   background-color: rgb(241, 220, 220);
//   @media screen and (max-width: 800) {
//     width: 100%;
//   }
// `;

const TimelineCntr = styled.div`
  position: sticky;
  top: 5rem;
  margin: 0;
  max-width: 98%;

  @media screen and (max-width: 550px) {
    display: none;
  }
`;

const timelineStyle = (props) => {
  return TimelineRelative;
};

const TimelineContent = styled.div`
  ${timelineStyle}
`;

const TimelineNavigation = styled(Link)`
  padding: 0.5rem;
`;

export { TimelineCntr, TimelineContent, TimelineNavigation };
