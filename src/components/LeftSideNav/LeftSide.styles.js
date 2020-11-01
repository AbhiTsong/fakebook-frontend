import styled from "styled-components";

const LeftNavComponent = styled.aside`
  width: 25rem;
  padding: 1rem;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export { LeftNavComponent };
