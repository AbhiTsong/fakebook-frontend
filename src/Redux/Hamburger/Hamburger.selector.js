import { createSelector } from "reselect";

const burgerStae = (state) => state.burger;

const toggleState = createSelector(burgerStae, (burger) => burger);

export { toggleState };
