import { call, put } from 'redux-saga/effects';
import { signIn, signUp } from '../../api/User';
import {
  authReqActionCreator,
  authRespActionCreator,
  registrReqActionCreator,
  registrRespActionCreator,
} from './actions';

export function* userSignInWorkSaga({
  payload,
}: ReturnType<typeof authReqActionCreator>) {
  const { data } = yield call(signIn, payload.email, payload.password);
  if (data) {
    console.log(data);

    yield put({
      type: authRespActionCreator.type,
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

export function* userSignUpWorkSaga({
  payload,
}: ReturnType<typeof registrReqActionCreator>) {
  const { data } = yield call(
    signUp,
    payload.name,
    payload.email,
    payload.password,
  );
  if (data) {
    console.log(data);

    yield put({
      type: registrRespActionCreator.type,
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
