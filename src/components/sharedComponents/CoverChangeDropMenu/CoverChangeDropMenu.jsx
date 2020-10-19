import React from "react";

// Styled Imports\
import {
  CoverDropContainer,
  SelectPhotoContainer,
  SelectPhotoContent,
  SelectedPhoto,
  SelectText,
  UploadPhoto,
} from "./CoverChangeDrop.styles";

// Shared Compoenents
import HorizontalLine from "../../sharedComponents/HorizontalLine/HorizontalLine";
import ChangeCover from "../ChangeCover/ChangeCover";

// Icons Import
import Select from "../../../Assets/images/file.png";
import File from "../../../Assets/images/upload.png";
// import Remove from "../../../Assets/images/d"

function CoverChangeDropMenu() {
  return (
    <CoverDropContainer>
      <SelectPhotoContainer>
        <SelectPhotoContent>
          <SelectedPhoto src={Select} alt="File Upload" />
        </SelectPhotoContent>
        <SelectText>Select Photo</SelectText>
      </SelectPhotoContainer>
      <UploadPhoto>
        <ChangeCover />
        <SelectText>Upload Photo</SelectText>
      </UploadPhoto>
      <div>
        <SelectPhotoContainer>
          <SelectPhotoContent>
            <SelectedPhoto src={Select} alt="File Upload" />
          </SelectPhotoContent>
          <SelectText>Select Photo</SelectText>
        </SelectPhotoContainer>
      </div>
      <HorizontalLine />
      <div>
        <SelectPhotoContainer>
          <SelectPhotoContent>
            <SelectedPhoto src={Select} alt="File Upload" />
          </SelectPhotoContent>
          <SelectText>Delete Photo</SelectText>
        </SelectPhotoContainer>
      </div>
    </CoverDropContainer>
  );
}

export default CoverChangeDropMenu;
