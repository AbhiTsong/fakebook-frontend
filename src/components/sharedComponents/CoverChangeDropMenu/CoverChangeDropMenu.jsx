import React from "react";
import { useSelector } from "react-redux";

// Styled Imports
import {
  CoverDropContainer,
  SelectText,
  UploadPhoto,
} from "./CoverChangeDrop.styles";

// Shared Compoenents
import HorizontalLine from "../../sharedComponents/HorizontalLine/HorizontalLine";
import ChangeCover from "../ChangeCover/ChangeCover";

// Icons Import
import File from "../../../Assets/images/file.png";
import Update from "../../../Assets/images/update.png";
import Upload from "../../../Assets/images/upload.png";
import Create from "../../../Assets/images/edit.png";

// Redux Import
import { themeSelector } from "../../../Redux/theme/theme.selector";

function CoverChangeDropMenu() {
  let { light } = useSelector(themeSelector);
  return (
    <CoverDropContainer light={light}>
      <UploadPhoto>
        <ChangeCover File={File} />
        <SelectText>Select Photo</SelectText>
      </UploadPhoto>

      <UploadPhoto>
        <ChangeCover File={Update} />
        <SelectText>Upload Photo</SelectText>
      </UploadPhoto>

      <UploadPhoto>
        <ChangeCover File={Upload} />
        <SelectText>Add Photo</SelectText>
      </UploadPhoto>

      <HorizontalLine />
      <UploadPhoto>
        <ChangeCover File={Create} />
        <SelectText>Create Cover</SelectText>
      </UploadPhoto>
    </CoverDropContainer>
  );
}

export default CoverChangeDropMenu;
