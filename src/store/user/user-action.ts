import { USER_ACTION_TYPES } from "./user-types";

import { UserData, OtherInformation } from "../../utils/firebase/firebase-utils";
import { Action, ActionWithPayload } from "../../utils/reducer/reducer-utils";

export type CheckUserSession = Action<USER_ACTION_TYPES.CHECK_USER_SESSION>;

export type SetCurrentUser = ActionWithPayload<
  USER_ACTION_TYPES.SET_CURRENT_USER,
  UserData
>;

export type EmailSignInStart = ActionWithPayload<
  USER_ACTION_TYPES.EMAIL_SIGN_IN_START,
  {
    email: string;
    password: string;
  }
>;

export type GoogleSignInStart = Action<USER_ACTION_TYPES.GOOGLE_SIGN_IN_START>;

export type SignInSuccess = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_IN_SUCCESS,
  UserData
>;

export type SignInFailure = ActionWithPayload<USER_ACTION_TYPES.SIGN_IN_FAILURE, Error>

export type SignUpStart = ActionWithPayload<USER_ACTION_TYPES.SIGN_UP_START, {email: string, password: string, displayName: string}>

export type SignUpSuccess = ActionWithPayload<USER_ACTION_TYPES.SIGN_UP_SUCESS, {user: UserData, otherInformation: OtherInformation}>

export type SignUpFailure = ActionWithPayload<USER_ACTION_TYPES.SIGN_UP_FAILURE, Error>

export type SignOutStart = Action<USER_ACTION_TYPES.SIGN_OUT_START>;

export type SignOutSuccess = Action<USER_ACTION_TYPES.SIGN_OUT_SUCESS>;

export type SignOutFailure = ActionWithPayload<USER_ACTION_TYPES.SIGN_OUT_FAILURE, Error>;

export type UserAcions =  SignInSuccess | SignInFailure |   SignUpFailure | SignOutSuccess | SignOutFailure

export const checkUserSession = (): CheckUserSession => ({
  type: USER_ACTION_TYPES.CHECK_USER_SESSION,
});

export const setCurrentUser = (user: UserData): SetCurrentUser => ({
  type: USER_ACTION_TYPES.SET_CURRENT_USER,
  payload: user,
});

export const emailSignInStart = (
  email: string,
  password: string
): EmailSignInStart => ({
  type: USER_ACTION_TYPES.EMAIL_SIGN_IN_START,
  payload: { email, password },
});

export const googleSignInStart = (): GoogleSignInStart => ({
  type: USER_ACTION_TYPES.GOOGLE_SIGN_IN_START,
});

export const signInSuccess = (user: UserData): SignInSuccess => ({
  type: USER_ACTION_TYPES.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (error: Error): SignInFailure => ({
  type: USER_ACTION_TYPES.SIGN_IN_FAILURE,
  payload: error,
});

export const signUpStart = (email: string, password: string, displayName:string): SignUpStart => ({
  type: USER_ACTION_TYPES.SIGN_UP_START,
  payload: { email, password, displayName },
});

export const signUpSuccess = ( user: UserData, otherInformation: OtherInformation ): SignUpSuccess => ({
  type: USER_ACTION_TYPES.SIGN_UP_SUCESS,
  payload: { user, otherInformation },
});

export const signUpFailure = (error: Error): SignUpFailure => ({
  type: USER_ACTION_TYPES.SIGN_UP_FAILURE,
  payload: error,
});

export const signOutStart = (): SignOutStart => ({
  type: USER_ACTION_TYPES.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
  type: USER_ACTION_TYPES.SIGN_OUT_SUCESS,
});

export const signOutFailure = (error: Error) => ({
  type: USER_ACTION_TYPES.SIGN_OUT_FAILURE,
  payload: error,
});
