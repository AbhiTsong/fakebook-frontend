import React from "react";
import "./NavProfilePic.styles.scss";
import { Link } from "react-router-dom";
import config from "../../../config/config.json";
import { useSelector } from "react-redux";

// Redux Import
import { currentUser } from "../../../Redux/Auth/SignIn/SignIn.Selector";

function NavProfilePic() {
  const user = useSelector(currentUser);

  const {
    user: { _id, firstName, lastName },
  } = user;

  return (
    <div className="Side_Profile_And_Name">
      <div className="Side_Profile_Container">
        <Link to="/profile">
          <img
            alt="Logged In User"
            src={`${config.serverURL}/users/${_id}/avatar`}
            className="Side_Nav_Profile"
          />
        </Link>
      </div>
      <Link to="/profile">
        <h5 className="User_Name">{`${firstName} ${lastName}`}</h5>
      </Link>
    </div>
  );
}

export default NavProfilePic;
