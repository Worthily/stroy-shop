import { userSlice } from './reducer';

export const {
  authReq: authReqActionCreator,
  authResp: authRespActionCreator,
  registrReq: registrReqActionCreator,
  registrResp: registrRespActionCreator,
  exitProfile: exitProfileActionCreator,
} = userSlice.actions;
