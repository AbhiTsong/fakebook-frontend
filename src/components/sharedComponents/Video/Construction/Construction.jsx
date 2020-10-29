import React from "react";
import ConstructionImage from "../../../../Assets/gifs/work.gif";
import { ConstructionImgCntr, ConstructorImg } from "./Constructon.styles";

function Construction() {
  return (
    <ConstructionImgCntr>
      <ConstructorImg src={ConstructionImage} />
    </ConstructionImgCntr>
  );
}

export default Construction;
