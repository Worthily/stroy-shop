import { call, put } from 'redux-saga/effects';
import { createPost, getProducts } from '../../api/Products';
import {
  createPostRespActionCreator,
  createPostReqActionCreator,
  getProductsReqActionCreator,
  getProductsRespActionCreator,
} from './actions';

export function* createProductWorkSaga({
  payload,
}: ReturnType<typeof createPostReqActionCreator>) {
  const price = payload.price;
  const categoryId: number = 1;
  const specialMarksId: number = 1;
  const { data } = yield call(
    createPost,
    payload.title,
    payload.content,
    payload.discount,
    payload.price,
    payload.categoryId,
    payload.specialMarksId,
    payload.image,
  );
  if (data) {
    console.log(data);

    yield put({
      type: createPostRespActionCreator.type,
      payload: {
        id: `${data[1].id}`,
        email: data[1].email,
        name: data[1].name,
        pass: data[1].password,
        roles: data[1].roles,
        token: data[0].token,
      },
    });
  } else {
    console.log('error');
  }
}

export function* getProductsWorkSaga({
  payload,
}: ReturnType<typeof getProductsReqActionCreator>) {
  const { data } = yield call(getProducts);
  if (data) {
    console.log(data);

    // yield put({
    //   type: getProductsRespActionCreator.type,
    //   payload: {
    //     id: `${data[1].id}`,
    //     email: data[1].email,
    //     name: data[1].name,
    //     pass: data[1].password,
    //     roles: data[1].roles,
    //     token: data[0].token,
    //   },
    // });
  } else {
    console.log('error');
  }
}
