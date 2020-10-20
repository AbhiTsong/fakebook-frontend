import React, { useEffect, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "react-elastic-carousel";

// Styled Import
import {
  FriendReqContr,
  FrinedSuggHeader,
  SuggestNameAndCrd,
  FriendSuggestContr,
  SuggestNameAndBtn,
  SuggestedPerson,
  NoFriendSuggestion,
} from "./FriendReqSuggest.styles";

// Redux Import
import { getAllUsersAction } from "../../../Redux/User/allUsersInTheDBAction";
import { userSelector } from "../../../Redux/User/UserSelector";

// Shared Components
import FriendSuggestImage from "./FriendSuggestImage/FriendSuggestImage";
import FriendSuggestButton from "./FriendSuggestButton/FriendSuggestButton";
import Skeleton from "../../Skeleton/AllPostsSkeleton/Skeleton";

function FriendSuggest() {
  const dispatch = useDispatch();
  const users = useSelector(userSelector);
  // const requestArray = useSelector(requestSent);

  useEffect(() => {
    dispatch(getAllUsersAction());
  }, []);

  if (users.loading) {
    return <Skeleton />;
  }

  return (
    <FriendReqContr>
      <FrinedSuggHeader>People You May Know</FrinedSuggHeader>
      <SuggestNameAndCrd>
        <Carousel itemsToShow={3}>
          {users.allUsers.data && users.allUsers.data.length > 0 ? (
            users.allUsers.data
              .map((user, idx) => (
                <FriendSuggestContr>
                  <FriendSuggestImage id={user._id} avatar={user.hasAvatar} />
                  <SuggestNameAndBtn>
                    <SuggestedPerson>
                      {user.firstName + " " + user.lastName}
                    </SuggestedPerson>
                    <FriendSuggestButton id={user._id} />
                  </SuggestNameAndBtn>
                </FriendSuggestContr>
              ))
              .reverse()
          ) : (
            <NoFriendSuggestion>
              You Have Literally Sent Friend Request To All Users.
            </NoFriendSuggestion>
          )}
        </Carousel>
      </SuggestNameAndCrd>
    </FriendReqContr>
  );
}

export default memo(FriendSuggest);
