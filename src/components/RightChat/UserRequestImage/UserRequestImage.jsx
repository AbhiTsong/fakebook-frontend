import React from "react";
import useCheckProfilePic from "../../../hooks/useCheckProfilePic";
import Default from "../../../Assets/images/default.png";
import config from "../../../config/config.json";
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
  // console.log("userImg", userImg[0])
  const [isProfilePic] = useCheckProfilePic(userImg[0].owner);
  return (
    <RequestContainer>
      <RequestContent>
        <RequestImageContainer>
          <RequestImage
            src={
              !isProfilePic
                ? Default
                : `${config.serverURL}/users/${userImg[0].owner}/avatar`
            }
          />
        </RequestImageContainer>
        <RequesterName>{userImg[0].name}</RequesterName>
      </RequestContent>
      <RequestButtonContainer>
        <AcceptButton
          onClick={() => console.log("I got clicked")}
          className="Accept_Request"
        >
          {" "}
          Confirm
        </AcceptButton>
        <DeclineButton
          onClick={() => console.log("I got clicked")}
          className="Delete_Request"
        >
          {" "}
          Delete
        </DeclineButton>
      </RequestButtonContainer>
      <HorizontalLine />
    </RequestContainer>
  );
}

export default UserRequestImage;
