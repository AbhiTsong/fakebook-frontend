import React from "react";
// import "./PostFilter.styles.scss";

import {
  FilterContainer,
  FilterTitle,
  FilterText,
  FilterBtnCntr,
  FilterViewOptions,
  FilterIcons,
} from "./PostFilterStyles";

// Shared Compoents
import HorizontalLine from "../../../sharedComponents/HorizontalLine/HorizontalLine";

function PostFilter() {
  return (
    <FilterContainer>
      <FilterTitle>
        <FilterText>Post</FilterText>
        <FilterBtnCntr>
          <button>Filter</button>
          <button>Manage Post</button>
        </FilterBtnCntr>
      </FilterTitle>
      <HorizontalLine />
      <FilterViewOptions>
        <FilterIcons>List View</FilterIcons>
        <FilterIcons>Grid View</FilterIcons>
      </FilterViewOptions>
    </FilterContainer>
  );
}

export default PostFilter;
