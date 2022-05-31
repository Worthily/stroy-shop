import { cardsSlice, cartSlice, userSlice, specialSlice } from './reducer';

export const { addNewProduct: addNewProductActionCreator } = cartSlice.actions;

export const { setInCart: setInCartActionCreator } = cardsSlice.actions;

export const { registr: registrActionCreator } = userSlice.actions;

export const {
  showUserPopup: showUserPopupActionCreator,
  hideUserPopup: hideUserPopupActionCreator,
  setUserLoggedIn: setUserLoggedInActionCreator,
} = specialSlice.actions;
