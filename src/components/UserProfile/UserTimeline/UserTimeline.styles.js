import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const TimelineRelative = css`
  width: 100%;
  z-index: 500;
  display: flex;
  justify-content: space-evenly;
  padding: 0.5rem;
  margin-top: 0.5rem;
  border-radius: 5px;
`;

const TimelineCntr = styled.div`
  position: sticky;
  top: 5rem;
  margin: 0;
  max-width: 98%;
  color: ${({ light }) => (light ? "#3e3c3c" : `white`)};
  background-color: ${({ light }) => (light ? "whitesmoke" : "#343232")};


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
  color: ${({ light }) => (light ? "#3e3c3c" : "aliceblue")};
`;

export { TimelineCntr, TimelineContent, TimelineNavigation };
