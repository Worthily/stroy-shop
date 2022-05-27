import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { Cards, ProductInCart } from '../types';

const cardsInitialState: Cards[] = [
  {
    id: '1',
    title: 'Мешок для мусора 55x95 см ткань/пропилен зеленый',
    content:
      'Описание товара Лишь сделанные на базе интернет-аналитики выводы ассоциативно распределены по отраслям. Как принято считать, акционеры крупнейших компаний освещают чрезвычайно интересные особенности картины в целом, однако',
    image: '',
    cost: '12000руб',
    categoryId: '1',
    specialMarksId: '',
    isInCart: false,
  },
  {
    id: '2',
    title: 'Пескобетон Axton M300 30 кг',
    content:
      'Описание товара Лишь сделанные на базе интернет-аналитики выводы ассоциативно распределены по отраслям. Как принято считать, акционеры крупнейших компаний освещают чрезвычайно интересные особенности картины в целом, однако',
    image: '',
    cost: '12000руб',
    categoryId: '1',
    specialMarksId: '',
    isInCart: false,
  },
  {
    id: '3',
    title: 'Клей для керамической плитки усиленный Bergauf Keramik Pro 25 кг',
    content:
      'Описание товара Лишь сделанные на базе интернет-аналитики выводы ассоциативно распределены по отраслям. Как принято считать, акционеры крупнейших компаний освещают чрезвычайно интересные особенности картины в целом, однако',
    image: '',
    cost: '12000руб',
    categoryId: '1',
    specialMarksId: '',
    isInCart: false,
  },
  {
    id: '4',
    title: 'Клей для керамической плитки усиленный Bergauf Keramik Pro 25 кг',
    content:
      'Описание товара Лишь сделанные на базе интернет-аналитики выводы ассоциативно распределены по отраслям. Как принято считать, акционеры крупнейших компаний освещают чрезвычайно интересные особенности картины в целом, однако',
    image: '',
    cost: '12000руб',
    categoryId: '1',
    specialMarksId: '',
    isInCart: false,
  },
  {
    id: '5',
    title: 'Пескобетон Axton M300 30 кг',
    content:
      'Описание товара Лишь сделанные на базе интернет-аналитики выводы ассоциативно распределены по отраслям. Как принято считать, акционеры крупнейших компаний освещают чрезвычайно интересные особенности картины в целом, однако',
    image: '',
    cost: '12000руб',
    categoryId: '1',
    specialMarksId: '',
    isInCart: false,
  },
  {
    id: '6',
    title: 'Мешок для мусора 55x95 см ткань/пропилен зеленый',
    content:
      'Описание товара Лишь сделанные на базе интернет-аналитики выводы ассоциативно распределены по отраслям. Как принято считать, акционеры крупнейших компаний освещают чрезвычайно интересные особенности картины в целом, однако',
    image: '',
    cost: '12000руб',
    categoryId: '1',
    specialMarksId: '',
    isInCart: false,
  },
];
const cartInitialState: ProductInCart[] = [];

export const cardsSlice = createSlice({
  name: 'cards',
  initialState: cardsInitialState,
  reducers: {
    setInCart: (state, { payload }: PayloadAction<{ cardId: string }>) => {
      const newArr = state.map((card) => {
        if (card.id === payload.cardId) {
          return { ...card, isInCart: true };
        }
        return card;
      });
      return newArr;
    },
  },
});
export const cartSlice = createSlice({
  name: 'cart',
  initialState: cartInitialState,
  reducers: {
    addNewProduct: (
      state,
      { payload }: PayloadAction<{ productId: string }>,
    ) => {
      let trust = false;
      let newArr = state;
      state.map((cart) => {
        if (cart.id === payload.productId) {
          trust = true;
        }
      });
      if (!trust) {
        newArr.push({ id: payload.productId, count: '1' });
      }
      return newArr;
    },
  },
});

export const reducer = combineReducers({
  cards: cardsSlice.reducer,
  productInCart: cartSlice.reducer,
});
