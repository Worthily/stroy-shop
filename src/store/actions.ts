import { cardsSlice, cartSlice, specialSlice, ordersSlice } from './reducer';

export const {
  addNewProduct: addNewProductActionCreator,
  removeProduct: removeProductActionCreator,
  addCountProduct: addCountProductActionCreator,
  subCountProduct: subCountProductActionCreator,
} = cartSlice.actions;

export const { setInCart: setInCartActionCreator } = cardsSlice.actions;

export const {
  createOrder: createOrderActionCreator,
  removeOrder: removeOrderActionCreator,
} = ordersSlice.actions;

export const {
  showUserPopup: showUserPopupActionCreator,
  hideUserPopup: hideUserPopupActionCreator,
  setUserLoggedIn: setUserLoggedInActionCreator,
} = specialSlice.actions;
