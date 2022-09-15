import { createSelector } from "reselect";

import { RootState } from "../store";
import { UserState } from "./user-reducer";

export const selecUserReducer = (state: RootState): UserState => state.user;

export const selectCurrentUser = createSelector(
  selecUserReducer,
  (user) => user.currentUser
);

export const selectErrorMessage = createSelector(
  selecUserReducer,
  (user) => user.error
)