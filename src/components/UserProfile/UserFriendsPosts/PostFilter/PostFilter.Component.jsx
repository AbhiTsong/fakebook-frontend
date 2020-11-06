import React, { useReducer, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Redux Import
import { showToster } from "../../../../Redux/toster/toster.action";

import {
  FilterContainer,
  FilterTitle,
  FilterText,
  FilterBtnCntr,
  FilterViewOptions,
  FilterIcons,
  LoaderGif,
} from "./PostFilterStyles";

// Shared Compoents
import HorizontalLine from "../../../sharedComponents/HorizontalLine/HorizontalLine";

// Loader Gif
import Loader from "../../../../Assets/gifs/loading2.gif";
import { themeSelector } from "../../../../Redux/theme/theme.selector";

const INITIAL_STATE = {
  loading2: false,
};

// Reducer Function
function reducer(state, { type }) {
  switch (type) {
    case "LOADER_2":
      return {
        ...state,
        loading2: true,
      };
    case "RESET_2":
      return {
        ...state,
        loading2: false,
      };
    default:
      return state;
  }
}

function PostFilter() {
  let { light } = useSelector(themeSelector);
  let [loader, dispatchLoader] = useReducer(reducer, INITIAL_STATE);
  let dispatch = useDispatch();

  useEffect(() => {
    let timer;
    if (loader.loading2) {
      timer = setTimeout(() => {
        dispatchLoader({ type: "RESET_2" });
        dispatch(showToster("Something Went Wrong"));
      }, 10000);
    }
    return () => clearInterval(timer);
  }, [dispatch, loader.loading2]);

  return (
    <FilterContainer light={light}>
      <FilterTitle>
        <FilterText>Post</FilterText>
        <FilterBtnCntr>
          <FilterIcons small={true}>Filter</FilterIcons>
          <FilterIcons small={true}>Manage Post</FilterIcons>
        </FilterBtnCntr>
      </FilterTitle>
      <HorizontalLine />
      <FilterViewOptions>
        <FilterIcons
          light={light}
          onClick={() => dispatch(showToster("Already Rendering In List View"))}
        >
          List View
        </FilterIcons>
        <FilterIcons
          light={light}
          onClick={() => dispatchLoader({ type: "LOADER_2" })}
        >
          {loader.loading2 ? <LoaderGif src={Loader} /> : "Grid View"}
        </FilterIcons>
      </FilterViewOptions>
    </FilterContainer>
  );
}

export default PostFilter;
