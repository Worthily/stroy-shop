import { api } from '..';
import { SIGN_IN_LINK, SIGN_UP_LINK } from '../../constants';

export async function signIn(email: string, password: string) {
  return await api
    .post(SIGN_IN_LINK, {
      email: email,
      password: password,
    })
    .catch((error) => {
      return error;
    });
}

export async function signUp(name: string, email: string, password: string) {
  return await api
    .post(SIGN_UP_LINK, {
      name: name,
      email: email,
      password: password,
    })
    .catch((error) => {
      return error;
    });
}
