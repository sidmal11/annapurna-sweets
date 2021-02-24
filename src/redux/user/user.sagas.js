import { takeLatest, put, all, call } from "redux-saga/effects";

import UserActionTypes from "./user.types";

import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser,
} from "../../firebase/firebases.utils";

import {
  googleSignInSuccess,
  googleSignInFailure,
  // signInSuccess,
  // signInFailure,
  // signOutSuccess,
  // signOutFailure,
  // signUpSuccess,
  // signUpFailure
} from "./user.actions";

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();
    yield put(
      googleSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
    );
    // yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(googleSignInFailure(error));
    // yield put(signInFailure(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    //   call(onEmailSignInStart),
    //   call(onCheckUserSession),
    //   call(onSignOutStart),
    //   call(onSignUpStart),
    //   call(onSignUpSuccess)
  ]);
}
