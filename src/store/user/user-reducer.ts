import {USER_ACTION_TYPES} from "./user-types";

import { UserAcions } from "./user-action";

import { UserData } from "../../utils/firebase/firebase-utils";

export type UserState = {
  readonly currentUser: UserData | null,
  readonly loading: boolean,
  readonly error: Error | null
}

const USER_INITIAL_STATE: UserState = {
  currentUser: null,
  loading: false,
  error: null,
};

export const userReducer = (state = USER_INITIAL_STATE, action = {} as UserAcions) => {

  switch (action.type) {
    case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
      };
    case USER_ACTION_TYPES.SIGN_OUT_SUCESS:
      return {
        ...state,
        currentUser: null,
      };
    case USER_ACTION_TYPES.SIGN_IN_FAILURE:
    case USER_ACTION_TYPES.SIGN_UP_FAILURE:
    case USER_ACTION_TYPES.SIGN_OUT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
