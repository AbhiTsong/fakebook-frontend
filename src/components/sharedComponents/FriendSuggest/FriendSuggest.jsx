import React, { useEffect } from "react";
import "./FriendSuggest.styles.scss";
import { useDispatch, useSelector } from "react-redux";
import config from "../../../config/config.json";

import FormInput from "../FormInput/FormInput.Component";

import Pic from "../../../Assets/images/person-2.jpg";
import AddFriend from "../../../Assets/images/addFriend.png";

// Redux Import
import { getAllUsersAction } from "../../../Redux/User/allUsersInTheDBAction";
import { userSelector } from "../../../Redux/User/UserSelector";
import { currentUser } from "../../../Redux/Auth/SignIn/SignIn.Selector";

function FriendSuggest() {
  const curUser = useSelector(currentUser);
  const dispatch = useDispatch();
  const users = useSelector(userSelector);
  console.log("allUsers", users);

  useEffect(() => {
    dispatch(getAllUsersAction());
  }, []);

  console.log("curUser -- ", curUser.user._id);

  if (users.loading) {
    return "Loading...";
  }

  return (
    <div className="Friend_Suggest_Containet">
      <h4 className="Friend_Suggest_Header">People You May Know</h4>
      {users.allUsers.data &&
        users.allUsers.data
          .filter((user) => user._id !== curUser.user._id)
          .map((user, idx) => (
            <div key={user + idx} className="Friend_Suggest_Container">
              <div className="Friend_Suggest_Image">
                <img
                  src={`${config.serverURL}/users/${user._id}/avatar`}
                  alt="User_Message"
                  className="Friend_Suggest_Person"
                />
              </div>
              <div className="Suggest_Name_Button">
                <h5 className="Suggested_Person_Name">{user.firstName}</h5>
                <button className="Add_Friend_Button">
                  <div className="Add_Friend_Image_Container">
                    <img
                      src={AddFriend}
                      alt="Add Friend"
                      className="Add_Image"
                    />
                  </div>
                  Add Friend
                </button>
              </div>
            </div>
          ))}
    </div>
  );
}

export default FriendSuggest;
