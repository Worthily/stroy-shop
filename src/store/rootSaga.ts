import { all } from 'redux-saga/effects';
import { authWatchSaga } from './User/watchers';
export default function* rootSaga() {
  console.log('rootsagaa');
  yield all([authWatchSaga()]);
}
