import styled, { css } from "styled-components";

export default styled.div`
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.textColor};
`;

export const ScrollStyles = css`
  &::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #dcdcdc;
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: lavender;
  }
`;
