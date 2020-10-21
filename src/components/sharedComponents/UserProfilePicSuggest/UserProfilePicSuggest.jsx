import React from "react";
import Pic from "../../../Assets/images/photo-1.jpg";
import CloseModalIcon from "../CloseModalIcon/CloseModalIcon";
import HorizontalLine from "../HorizontalLine/HorizontalLine";

// Styled Imports
import {
  UserPhotoSuggestCntr,
  ComponentTitle,
  Title,
  UploadBtnAndPhoto,
  ButtonCntr,
  AllPhotCntr,
  AllPhotoContent,
  PhotoContent,
  Image,
} from "./UserProfilePicSuggest.styles";

// Sahred Component
import FileUploaderWithCropper from "../ProfilePicInput/ProfilePicInput";

function UserProfilePicSuggest() {
  return (
    <UserPhotoSuggestCntr>
      <ComponentTitle>
        <Title>Upload A Profile Pic</Title>
        <CloseModalIcon />
      </ComponentTitle>
      <HorizontalLine />
      <UploadBtnAndPhoto>
        <ButtonCntr>
          <FileUploaderWithCropper />
        </ButtonCntr>
        <AllPhotCntr>
          <h5>Suggested Photos</h5>
          <AllPhotoContent>
            {[...Array(18).keys()].map((pic, idx) => {
              return (
                <PhotoContent>
                  <Image src={Pic} />
                </PhotoContent>
              );
            })}
          </AllPhotoContent>
        </AllPhotCntr>
      </UploadBtnAndPhoto>
    </UserPhotoSuggestCntr>
  );
}

export default UserProfilePicSuggest;
