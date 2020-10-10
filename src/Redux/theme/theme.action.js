import { ThemeTypes } from "./theme.types";

function selectTheme(mode) {
  return {
    type: ThemeTypes.DARK_MODE,
    payload: mode,
  };
}

export { selectTheme };
