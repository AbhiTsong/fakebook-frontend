import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CloseModalIcon from "../CloseModalIcon/CloseModalIcon";
import HorizontalLine from "../HorizontalLine/HorizontalLine";

// Loader
import Loader from "../../../Assets/gifs/loading2.gif";

// Redux Import
import { FetchRandomUsers3 } from "../../../Redux/RandomUsers/randomUsersAction";
import { CloseModal } from "../../../Redux/Modal/ModalAction";
import { randomSelector } from "../../../Redux/RandomUsers/RandomUsers.selector";

// Styled Imports
import {
  UserPhotoSuggestCntr,
  ComponentTitle,
  Title,
  UploadBtnAndPhoto,
  ButtonCntr,
  SuggestText,
  AllPhotCntr,
  AllPhotoContent,
  PhotoContent,
  LoaderContr,
  Image,
} from "./UserProfilePicSuggest.styles";

// Sahred Component
import FileUploaderWithCropper from "../ProfilePicInput/ProfilePicInput";
import { ToolTip } from "../ToolTip/ToolTip";

function UserProfilePicSuggest() {
  const dispatch = useDispatch();
  let picSuggest = useSelector(randomSelector);

  useEffect(() => {
    dispatch(FetchRandomUsers3());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function setRandomProfilePic(picAdd) {
    window.sessionStorage.setItem("randomPic", JSON.stringify(picAdd));
    dispatch(CloseModal());
  }

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
          <SuggestText>Suggested Photos</SuggestText>
          <AllPhotoContent>
            {picSuggest.loading
              ? [...Array(40).keys()].map((pic, idx) => {
                  return (
                    <PhotoContent loading="true" key={pic + idx}>
                      <LoaderContr>
                        <ToolTip tip="Loading Image Plz Wait">
                          <Image src={Loader} />
                        </ToolTip>
                      </LoaderContr>
                    </PhotoContent>
                  );
                })
              : picSuggest.users3 &&
                picSuggest.users3.data &&
                picSuggest.users3.data.results.map((user, idx) => {
                  return (
                    <PhotoContent
                      key={idx + user}
                      onClick={() => setRandomProfilePic(user.picture.large)}
                    >
                      <ToolTip tip="Click to make this as your profile pic">
                        <Image src={user.picture.large} />
                      </ToolTip>
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
