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
  loading1: false,
  loading2: false,
  loading3: false,
};

// Reducer Function
function reducer(state, { type }) {
  switch (type) {
    case "LOADER_1":
      return {
        ...state,
        loading1: true,
      };
    case "RESET_1":
      return {
        ...state,
        loading1: false,
      };
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
    case "LOADER_3":
      return {
        ...state,
        loading3: true,
      };
    case "RESET_3":
      return {
        ...state,
        loading3: false,
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
    if (loader.loading1) {
      timer = setTimeout(() => {
        dispatchLoader({ type: "RESET_1" });
        dispatch(showToster("Something Went Wrong"));
      }, 10000);
    }
    if (loader.loading2) {
      timer = setTimeout(() => {
        dispatchLoader({ type: "RESET_2" });
        dispatch(showToster("Something Went Wrong"));
      }, 10000);
    }
    if (loader.loading3) {
      timer = setTimeout(() => {
        dispatchLoader({ type: "RESET_3" });
        dispatch(showToster("Something Went Wrong"));
      }, 10000);
    }
    return () => clearInterval(timer);
  }, [dispatch, loader.loading1, loader.loading2, loader.loading3]);

  let { loading1, loading3 } = loader;

  return (
    <FilterContainer light={light}>
      <FilterTitle>
        <FilterText>Post</FilterText>
        <FilterBtnCntr>
          <FilterIcons
            disabled={loading1}
            onClick={() => dispatchLoader({ type: "LOADER_1" })}
            light={light}
            small={true}
          >
            {loader.loading1 ? <LoaderGif src={Loader} /> : "Filter"}
          </FilterIcons>
          <FilterIcons
            disabled={loading3}
            onClick={() => dispatchLoader({ type: "LOADER_3" })}
            light={light}
            small={true}
          >
            {loader.loading3 ? <LoaderGif src={Loader} /> : "Manage Post"}
          </FilterIcons>
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
