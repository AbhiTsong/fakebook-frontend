import React from "react";
import { useSelector } from "react-redux";

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
import { themeSelector } from "../../../Redux/theme/theme.selector";
// import Remove from "../../../Assets/images/d"

function CoverChangeDropMenu() {
  let { light } = useSelector(themeSelector);
  return (
    <CoverDropContainer light={light}>
      <UploadPhoto>
        <ChangeCover />
        <SelectText>Select Photo</SelectText>
      </UploadPhoto>

      <UploadPhoto>
        <ChangeCover />
        <SelectText>Upload Photo</SelectText>
      </UploadPhoto>

      <UploadPhoto>
        <ChangeCover />
        <SelectText>Add Photo</SelectText>
      </UploadPhoto>

      <HorizontalLine />
      <UploadPhoto>
        <ChangeCover />
        <SelectText>Delete Photo</SelectText>
      </UploadPhoto>
    </CoverDropContainer>
  );
}

export default CoverChangeDropMenu;
