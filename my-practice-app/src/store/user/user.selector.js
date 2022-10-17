import { createSelector } from "reselect";

const userReducer = (state) => state.user;

const userSlice = createSelector([userReducer], (user) => user);
export const userSelector = createSelector([userSlice], (user) => user);
