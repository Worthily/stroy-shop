import { User } from '../../types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ADMIN, USER } from '../../constants';

const userInitialState: User = {
  id: '',
  name: '',
  email: '',
  password: '',
  banned: false,
  banReason: '',
  role: '',
  token: '',
  logged: false,
};

export const userSlice = createSlice({
  name: 'cards',
  initialState: userInitialState,
  reducers: {
    exitProfile: (state) => {
      return userInitialState;
    },
    registr: (
      state,
      {
        payload,
      }: PayloadAction<{ name: string; email: string; password: string }>,
    ) => {
      const newUser = {
        id: '1',
        name: payload.name,
        email: payload.email,
        password: payload.password,
        banned: false,
        banReason: '',
        role: 'user',
        token: '',
        logged: false,
      };
      return newUser;
    },
    authReq: (
      state,
      { payload }: PayloadAction<{ email: string; password: string }>,
    ) => {},
    authResp: (
      state,
      {
        payload,
      }: PayloadAction<{
        id: string;
        name: string;
        email: string;
        password: string;
        roles: any;
        token: string;
      }>,
    ) => {
      const { roles } = payload;
      let userRrole = '';
      if (roles != []) {
        console.log('не пустой');
        if (roles.length == 1) {
          console.log('длинна == 1');
          if (roles[0].value == ADMIN) {
            userRrole = ADMIN;
          } else if (roles[0].value == USER) {
            userRrole = USER;
          } else {
            userRrole = 'error';
          }
        } else if (roles.length > 1) {
          console.log('длинна > 1');
          let num = roles.length;
          num = num - 1;
          const dataRole = roles[num];
          console.log(dataRole.value);
          if (dataRole.value == ADMIN) {
            console.log('выдан админ');
            userRrole = ADMIN;
          } else if (dataRole.value == USER) {
            userRrole = USER;
          } else {
            userRrole = 'error';
          }
        } else {
          userRrole = 'error';
        }
      } else {
        userRrole = USER;
      }

      const userNewState: User = {
        id: `${payload.id}`,
        email: payload.email,
        name: payload.name,
        token: payload.token,
        password: payload.password,
        banned: false,
        banReason: '',
        role: userRrole,
        logged: true,
      };

      return userNewState;
    },
    registrReq: (
      state,
      {
        payload,
      }: PayloadAction<{ name: string; email: string; password: string }>,
    ) => {},
    registrResp: (
      state,
      {
        payload,
      }: PayloadAction<{
        id: string;
        name: string;
        email: string;
        password: string;
        roles: any;
        token: string;
      }>,
    ) => {
      const { roles } = payload;
      let userRrole = '';
      if (roles != []) {
        console.log('не пустой');
        if (roles.length == 1) {
          console.log('длинна == 1');
          if (roles[0].value == ADMIN) {
            userRrole = ADMIN;
          } else if (roles[0].value == USER) {
            userRrole = USER;
          } else {
            userRrole = 'error';
          }
        } else if (roles.length > 1) {
          console.log('длинна > 1');
          let num = roles.length;
          num = num - 1;
          const dataRole = roles[num];
          console.log(dataRole.value);
          if (dataRole.value == ADMIN) {
            console.log('выдан админ');
            userRrole = ADMIN;
          } else if (dataRole.value == USER) {
            userRrole = USER;
          } else {
            userRrole = 'error';
          }
        } else {
          userRrole = 'error';
        }
      } else {
        userRrole = USER;
      }

      const userNewState: User = {
        id: `${payload.id}`,
        email: payload.email,
        name: payload.name,
        token: payload.token,
        password: payload.password,
        banned: false,
        banReason: '',
        role: userRrole,
        logged: true,
      };

      return userNewState;
    },
  },
});
