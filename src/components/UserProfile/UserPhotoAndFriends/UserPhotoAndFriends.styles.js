import styled from "styled-components";

const UserCreatedPostContr = styled.div`
  position: relative;
  width: 42%;
  height: 100%;

  @media screen and (max-width: 800px){
     display: none
  }
`;

const UserPhotoSticky = styled.div`
  position: sticky;
  top: -2rem;
  width: 20.9rem;
`;

export { UserCreatedPostContr, UserPhotoSticky };
