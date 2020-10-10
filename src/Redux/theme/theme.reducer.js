import { ThemeTypes } from "./theme.types";

const INITIAL_STATE = {
  light: false
};

function themeReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ThemeTypes.DARK_MODE:
      return {
        ...state,
        light: !state.light,
      };

    default:
      return state;
  }
}

export { themeReducer };
