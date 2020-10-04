import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Toster.styles.scss";

// Redux Imports
import { closeToster } from "../../../Redux/toster/toster.action";
import { tostSelector } from "../../../Redux/toster/tostSelectos";

function Toster() {
  const tostMessage = useSelector(tostSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(closeToster());
    }, 5000);
  }, []);

  // Function For Closing The Modal
  function handleCloseModal() {
    dispatch(closeToster());
  }

  return (
    <div className="Toster_Container">
      <h5 className="Tost_Message">
        {tostMessage.content}{" "}
        <span className="close" onClick={handleCloseModal}>
          x
        </span>
      </h5>
    </div>
  );
}

export default Toster;
