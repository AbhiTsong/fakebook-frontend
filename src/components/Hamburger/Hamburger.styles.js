import styled from "styled-components";

const HamBurgerCutr = styled.div`
  height: 1.5rem;
  margin-left: 5rem;
  cursor: pointer;

  @media screen and (max-width: 400px){
  margin-left: 2rem;

  }
`;

const HamIcon = styled.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
`;

export { HamBurgerCutr, HamIcon };
