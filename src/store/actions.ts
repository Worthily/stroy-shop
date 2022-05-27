import { cardsSlice, cartSlice } from './reducer';

export const { addNewProduct: addNewProductActionCreator } = cartSlice.actions;

export const { setInCart: setInCartActionCreator } = cardsSlice.actions;
