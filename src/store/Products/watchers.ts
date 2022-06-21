import { takeLatest } from 'redux-saga/effects';
import {
  createPostReqActionCreator,
  getProductsReqActionCreator,
} from './actions';
import { createProductWorkSaga, getProductsWorkSaga } from './workers';

export function* authWatchSaga() {
  yield takeLatest(createPostReqActionCreator, createProductWorkSaga);
  yield takeLatest(getProductsReqActionCreator, getProductsWorkSaga);
}
