import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { Cards, Comments, User } from '../types';

const cardsInitialState: Cards[] = [
  {
    id: '1',
    title: 'Товар1',
    content:
      'Описание товара Лишь сделанные на базе интернет-аналитики выводы ассоциативно распределены по отраслям. Как принято считать, акционеры крупнейших компаний освещают чрезвычайно интересные особенности картины в целом, однако',
    image: '',
    categoryId: '1',
    specialMarksId: '',
  },
];

export const cardsSlice = createSlice({
  name: 'cards',
  initialState: cardsInitialState,
  reducers: {
    create: (state, { payload }: PayloadAction<{}>) => {
      return;
    },
  },
});

export const reducer = combineReducers({
  cards: cardsSlice.reducer,
});
