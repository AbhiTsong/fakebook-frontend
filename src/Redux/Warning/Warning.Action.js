import { WarningActionTYpes } from "./Warning.Types";

function ShowWarning() {
  return {
    type: WarningActionTYpes.SHOW_WARNING_BOX,
  };
}

function CloseWarning() {
  return {
    type: WarningActionTYpes.CLOSE_WARNING_BOX,
  };
}

export { ShowWarning, CloseWarning };
