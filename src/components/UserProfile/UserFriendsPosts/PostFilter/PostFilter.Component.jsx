import React, { useReducer, useEffect } from "react";
import { useDispatch } from "react-redux";

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
        <FilterIcons
          onClick={() => dispatch(showToster("Already Rendering In List View"))}
        >
          List View
        </FilterIcons>
        <FilterIcons onClick={() => dispatchLoader({ type: "LOADER_2" })}>
          {loader.loading2 ? <LoaderGif src={Loader} /> : "Grid View"}
        </FilterIcons>
      </FilterViewOptions>
    </FilterContainer>
  );
}

export default PostFilter;
