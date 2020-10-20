import React from "react";
import "./UserProfilePicSuggest.styles.scss";
import Pic from "../../../Assets/images/photo-1.jpg";
import CloseModalIcon from "../CloseModalIcon/CloseModalIcon";
import HorizontalLine from "../HorizontalLine/HorizontalLine";

// Sahred Component
import FileUploaderWithCropper from "../ProfilePicInput/ProfilePicInput";

function UserProfilePicSuggest() {
  return (
    <div className="UserPhotoSuggestContainer">
      <div className="Component_Title">
        <h4 className="Title">Upload A Profile Pic</h4>
        <CloseModalIcon />
      </div>
      <HorizontalLine />
      <div className="Upload_Button_And_Photos">
        <div className="Button_Container">
          <FileUploaderWithCropper />
        </div>
        <div className="All_Photo_Container">
          <h5>Suggested Photos</h5>
          <div className="Photo_Container">
            {[...Array(18).keys()].map((pic, idx) => {
              return (
                <div key={pic + idx} className="Photo_Content">
                  <img className="Uploaded_Pics" src={Pic} alt="Pic Posts" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfilePicSuggest;
