import React from "react";
import ConstructionImage from "../../../../Assets/gifs/work.gif";

// Styled Component
import styled from "styled-components";
const ConstructionImgCntr = styled.div`
  margin: auto;
  margin-top: 15%;
`;

function Construction() {
  return (
    <ConstructionImgCntr>
      <img src={ConstructionImage} alt="Construction Pic" />
    </ConstructionImgCntr>
  );
}

export default Construction;
