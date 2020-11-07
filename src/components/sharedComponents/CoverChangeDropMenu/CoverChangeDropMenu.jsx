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
import { themeSelector } from "../../../Redux/theme/theme.selector";

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
        <SelectText>Create Cover</SelectText>
      </UploadPhoto>
    </CoverDropContainer>
  );
}

export default CoverChangeDropMenu;
