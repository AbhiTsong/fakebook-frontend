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
import { themeSelector } from "../../../Redux/theme/theme.selector";

// Custom Hooks
import { useCalcInnerWidth } from "../../../hooks/useCalcInnerWidth";

// Shared Components
import FriendSuggestImage from "./FriendSuggestImage/FriendSuggestImage";
import FriendSuggestButton from "./FriendSuggestButton/FriendSuggestButton";
import Skeleton from "../../Skeleton/AllPostsSkeleton/Skeleton";

function FriendSuggest() {
  const dispatch = useDispatch();
  const users = useSelector(userSelector);
  const {light} = useSelector(themeSelector)
  let width = useCalcInnerWidth(window.innerWidth);
  
  useEffect(() => {
    dispatch(getAllUsersAction());
  }, []);

  if (users.loading) {
    return <Skeleton />;
  }

  return (
    <FriendReqContr light={light}>
      <FrinedSuggHeader>People You May Know</FrinedSuggHeader>
      <SuggestNameAndCrd>
        <Carousel itemsToShow={width < 550 ? 1 : width < 800 ? 2 : 3}>
          {users.allUsers.data && users.allUsers.data.length > 0 ? (
            users.allUsers.data
              .map((user, idx) => (
                <FriendSuggestContr key={idx}>
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
