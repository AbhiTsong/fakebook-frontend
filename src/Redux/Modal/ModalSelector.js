import { createSelector } from "reselect";

const modalState = (state) => state.modal;

const modalSelector = createSelector(modalState, (modal) => modal);

export { modalSelector };
