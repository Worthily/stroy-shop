import { cardsSlice } from './reducer';

export const {
  createPostResp: createPostRespActionCreator,
  createPostReq: createPostReqActionCreator,
  getProductsReq: getProductsReqActionCreator,
  getProductsResp: getProductsRespActionCreator,
  setInCart: setInCartActionCreator,
} = cardsSlice.actions;
