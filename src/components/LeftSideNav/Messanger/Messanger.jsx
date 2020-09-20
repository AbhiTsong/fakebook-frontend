import React from "react";
import "./Messanger.styles.scss";

import Message from "../../../Assets/images/messenger.png";

function Messanger() {
  return (
    <div className="Messanger_Container">
      <div className="Logo_Container">
        <img className="Logo" src={Message} alt="Messanger Container" />
      </div>
      <div>Message</div>
    </div>
  );
}

export default Messanger;
