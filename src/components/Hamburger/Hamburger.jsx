import React, { useState } from "react";
import { Link } from "react-router-dom";

// Icon import
import HamburgerIcn from "../../Assets/images/hamburger.png";
import CloseIcn from "../../Assets/images/close.png";

// Child Componet
import { HamBurgerCutr, HamIcon } from "./Hamburger.styles";

function Hamburger({ width }) {
  const [btn, setBtn] = useState(true);

  function toggleBtn() {
    setBtn(!btn);
  }

  return (
    <>
      {width < 800 ? (
        <HamBurgerCutr>
          <HamIcon onClick={toggleBtn} src={btn ? HamburgerIcn : CloseIcn} />
        </HamBurgerCutr>
      ) : (
        ""
      )}
    </>
  );
}

export default Hamburger;
