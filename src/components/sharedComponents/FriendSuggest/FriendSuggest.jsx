import React, { useEffect } from "react";
import "./FriendSuggest.styles.scss";
import { useDispatch, useSelector } from "react-redux";

// Redux Import
import { getAllUsersAction } from "../../../Redux/User/allUsersInTheDBAction";
import { userSelector } from "../../../Redux/User/UserSelector";
import { currentUser } from "../../../Redux/Auth/SignIn/SignIn.Selector";

// Shared Components
import FriendSuggestImage from "./FriendSuggestImage/FriendSuggestImage";
import FriendSuggestButton from "./FriendSuggestButton/FriendSuggestButton";
import { requestSent } from "../../../Redux/Auth/SignUp/SignUp.Selector";

function FriendSuggest() {
  const curUser = useSelector(currentUser);
  const dispatch = useDispatch();
  const users = useSelector(userSelector);
  const requestArray = useSelector(requestSent);

  useEffect(() => {
    dispatch(getAllUsersAction());
  }, []);

  console.log("", requestArray);

  if (users.loading) {
    return "Loading...";
  }

  return (
    <div className="Friend_Suggest_Containet">
      <h4 className="Friend_Suggest_Header">People You May Know</h4>
      <div className="Suggest_Name_And_card">
        {users.allUsers.data &&
          users.allUsers.data.map((user, idx) => (
            <div key={user + idx} className="Friend_Suggest_Container">
              <FriendSuggestImage id={user._id} />
              <div className="Suggest_Name_Button">
                <h5 className="Suggested_Person_Name">
                  {user.firstName + " " + user.lastName}
                </h5>
                <FriendSuggestButton id={user._id} />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default FriendSuggest;
