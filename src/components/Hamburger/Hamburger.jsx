import React from "react";
import { useSelector, useDispatch } from "react-redux";

// Icon import
import HamburgerIcn from "../../Assets/images/hamburger.png";
import CloseIcn from "../../Assets/images/close.png";

// Redux Import
import { toggleHamburger } from "../../Redux/Hamburger/Hamburger.action";
import { toggleState } from "../../Redux/Hamburger/Hamburger.selector";

// Child Componet
import { HamBurgerCutr, HamIcon } from "./Hamburger.styles";

function Hamburger({ width }) {
  const dispatch = useDispatch();
  const { show } = useSelector(toggleState);

  function toggleBtn() {
    dispatch(toggleHamburger());
  }

  return (
    <>
      {width < 800 ? (
        <HamBurgerCutr>
          <HamIcon onClick={toggleBtn} src={show ? CloseIcn : HamburgerIcn} />
        </HamBurgerCutr>
      ) : (
        ""
      )}
    </>
  );
}

export default Hamburger;
