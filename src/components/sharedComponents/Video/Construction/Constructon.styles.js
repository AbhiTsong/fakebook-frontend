import styled from "styled-components";

const ConstructionImgCntr = styled.div`
  margin: auto;
  margin-top: 15%;

  @media screen and (max-width: 1050px) {
    width: 17rem;
    height: 13rem;
  }
`;

const ConstructorImg = styled.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
`;

export {
 ConstructionImgCntr,
 ConstructorImg
}

