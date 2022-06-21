import { Cards, User } from '../../types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ADMIN, USER } from '../../constants';
import { cartSlice } from '../reducer';

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
    categoryId: '2',
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
    categoryId: '2',
    specialMarksId: '',
    isInCart: false,
  },
  {
    id: '7',
    title:
      'Мешок для мусора 55x95 см ткань/пропилен зеленый Мешок для мусора 55x95 см ткань/пропилен зеленый Мешок для мусора 55x95 см ткань/пропилен зеленый',
    content:
      'Описание товара Лишь сделанные на базе интернет-аналитики выводы ассоциативно распределены по отраслям. Как принято считать, акционеры крупнейших компаний освещают чрезвычайно интересные особенности картины в целом, однако',
    image: '',
    cost: '12000руб',
    categoryId: '2',
    specialMarksId: '',
    isInCart: false,
  },
  {
    id: '8',
    title: 'Мешок',
    content:
      'Описание товара Лишь сделанные на базе интернет-аналитики выводы ассоциативно распределены по отраслям. Как принято считать, акционеры крупнейших компаний освещают чрезвычайно интересные особенности картины в целом, однако',
    image: '',
    cost: '12000руб',
    categoryId: '2',
    specialMarksId: '',
    isInCart: false,
  },
  {
    id: '9',
    title: 'Мешок',
    content:
      'Описание товара Лишь сделанные на базе интернет-аналитики выводы ассоциативно распределены по отраслям. Как принято считать, акционеры крупнейших компаний освещают чрезвычайно интересные особенности картины в целом, однако',
    image: '',
    cost: '12000руб',
    categoryId: '3',
    specialMarksId: '',
    isInCart: false,
  },
];

export const cardsSlice = createSlice({
  name: 'cards',
  initialState: cardsInitialState,
  reducers: {
    getProductsReq: (state) => {},
    getProductsResp: (state, { payload }: PayloadAction<Cards[]>) => {
      return [...payload];
    },
    createPostReq: (
      state,
      {
        payload,
      }: PayloadAction<{
        title: string;
        content: string;
        discount: number;
        price: number;
        categoryId: number;
        specialMarksId: number;
        image: any;
      }>,
    ) => {},
    createPostResp: (state, { payload }: PayloadAction<Cards>) => {
      return [...state, payload];
    },
    setInCart: (
      state,
      { payload }: PayloadAction<{ cardId: string; isInCart: boolean }>,
    ) => {
      const newArr = state.map((card) => {
        if (card.id === payload.cardId) {
          return { ...card, isInCart: payload.isInCart };
        }
        return card;
      });
      return newArr;
    },
  },
  extraReducers: {
    [cartSlice.actions.removeProduct.type]: (
      state,
      { payload }: PayloadAction<{ productId: string }>,
    ) => {
      const newArr = state.map((card) => {
        if (card.id === payload.productId) {
          return { ...card, isInCart: false };
        }
        return card;
      });
      return newArr;
    },
  },
});
