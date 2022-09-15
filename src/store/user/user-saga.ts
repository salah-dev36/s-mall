import { takeLatest, put, all, call } from "typed-redux-saga/macro";

import { User } from "firebase/auth";

import {
  getCurrentUser,
  createUserDocument,
  signInWithGooglePopup,
  signInAuthUser,
  createAuthUser,
  signOutUser,
  OtherInformation
} from "../../utils/firebase/firebase-utils";

import {
  signInFailure,
  signInSuccess,
  signOutFailure,
  signOutSuccess,
  signUpFailure,
  signUpSuccess,
  EmailSignInStart,
  SignUpStart,
  SignUpSuccess
  
} from "./user-action";
import {USER_ACTION_TYPES} from "./user-types";



export function* getSnapshotFromUserAuth(userAuth: User, otherInformation?: OtherInformation) {
  try {
    const userSnapshot = yield* call(
      createUserDocument,
      userAuth,
      otherInformation
    );
    if(userSnapshot) {
      yield* put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data() }));

    }
  } catch (error) {
    yield* put(signInFailure(error as Error));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield* call(signInWithGooglePopup);
    yield* call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield* put(signInFailure(error as Error));
  }
}

export function* signInWithEandP({ payload: { email, password }}: EmailSignInStart) {
  try {
    const userCredential = yield* call(signInAuthUser, email, password);
    
    if(userCredential) {
      const {user} = userCredential
      yield* call(getSnapshotFromUserAuth, user);
    }
  } catch (error) {
    yield* put(signInFailure(error as Error));
  }
}

export function* SignUp({ payload: { email, password, displayName } }: SignUpStart) {
  try {
    const userCredential = yield* call(createAuthUser, email, password);
    if(userCredential){
      const {user} = userCredential
      yield* put(signUpSuccess(user, { displayName }));
    }
  } catch (error) {
    yield* put(signUpFailure(error as Error));
  }
}

export function* SignInAfterSignUp({ payload: {user, otherInformation} }: SignUpSuccess) {
  yield* call(getSnapshotFromUserAuth, user, otherInformation);
}

export function* signOut() {
  try {
    yield* call(signOutUser);
    yield* put(signOutSuccess());
  } catch (error) {
    yield* put(signOutFailure(error as Error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield* call(getCurrentUser);
    if (!userAuth) return;
    yield* call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {
    yield* put(signInFailure(error as Error));
  }
}

export function* onGoogleSignInStart() {
  yield* takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onCheckUserSession() {
  yield* takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onEmailSignInStart() {
  yield* takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEandP);
}

export function* onSignUpStart() {
  yield* takeLatest(USER_ACTION_TYPES.SIGN_UP_START, SignUp);
}

export function* onSignUpSuccess() {
  yield* takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCESS, SignInAfterSignUp);
}

export function* onSignOutStart () {
  yield* takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut)
}

export function* userSagas() {
  yield* all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onSignOutStart)
  ]);
}
