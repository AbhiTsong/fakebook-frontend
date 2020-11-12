import React from "react";
import useCheckProfilePic from "../../../hooks/useCheckProfilePic";
import Default from "../../../Assets/images/default.png";
import HorizontalLine from "../../sharedComponents/HorizontalLine/HorizontalLine";

// Styled Imports
import {
  RequestContainer,
  RequestContent,
  RequestImageContainer,
  RequestImage,
  RequesterName,
  RequestButtonContainer,
  AcceptButton,
  DeclineButton,
} from "./UserRequestImage.styles";

function UserRequestImage({ userImg }) {
  const [isProfilePic] = useCheckProfilePic(userImg[0].owner);
  return (
    <RequestContainer>
      <RequestContent>
        <RequestImageContainer>
          <RequestImage
            src={
              !isProfilePic
                ? Default
                : `${process.env.REACT_APP_BACK_END}/users/${userImg[0].owner}/avatar`
            }
          />
        </RequestImageContainer>
        <RequesterName>{userImg[0].name}</RequesterName>
      </RequestContent>
      <RequestButtonContainer>
        <AcceptButton className="Accept_Request"> Confirm</AcceptButton>
        <DeclineButton className="Delete_Request"> Delete</DeclineButton>
      </RequestButtonContainer>
      <HorizontalLine />
    </RequestContainer>
  );
}

export default UserRequestImage;
