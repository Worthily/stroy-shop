import { takeLatest } from 'redux-saga/effects';
import { authReqActionCreator, registrReqActionCreator } from './actions';
import { userSignInWorkSaga, userSignUpWorkSaga } from './workers';

export function* authWatchSaga() {
  yield takeLatest(authReqActionCreator, userSignInWorkSaga);
  yield takeLatest(registrReqActionCreator, userSignUpWorkSaga);
}
