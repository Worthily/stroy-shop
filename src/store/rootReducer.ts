import { combineReducers } from '@reduxjs/toolkit';
import { specialSlice } from './reducer';
import { userSlice } from './User/reducer';
import { commentsSlice } from './reducer';
import { ordersSlice } from './reducer';
import { cartSlice } from './reducer';
import { cardsSlice } from './Products/reducer';
import { categorySlice } from './reducer';

export const reducer = combineReducers({
  cards: cardsSlice.reducer,
  productInCart: cartSlice.reducer,
  user: userSlice.reducer,
  special: specialSlice.reducer,
  comments: commentsSlice.reducer,
  category: categorySlice.reducer,
  orders: ordersSlice.reducer,
});
