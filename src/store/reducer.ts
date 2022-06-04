import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { stat } from 'fs';
import { combineReducers } from 'redux';
import {
  Cards,
  Category,
  Comments,
  Order,
  ProductInCart,
  Special,
  User,
} from '../types';

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
    title: 'Тимур, тот же мешок только Тимур',
    content:
      'Описание Тимура Лишь сделанные на базе интернет-аналитики выводы ассоциативно распределены по отраслям. Как принято считать, акционеры крупнейших компаний освещают чрезвычайно интересные особенности картины в целом, однако',
    image: '',
    cost: '12000руб',
    categoryId: '3',
    specialMarksId: '',
    isInCart: false,
  },
];
const cartInitialState: ProductInCart[] = [];
const userInitialState: User = {
  id: '',
  name: '',
  email: '',
  password: '',
  banned: false,
  banReason: '',
  role: '',
};

const specialInitialState: Special = {
  showUserPopup: false,
  userLoggedIn: false,
};
const commentsInitialState: Comments[] = [
  {
    id: '1',
    author: 'Worthily',
    text: 'Говоно мешок мешокмешокмешокмешок мешок мешок мешокм ешокмешокме шокмешокмешокмешокмеш окмешокмешо кмешокмешокмешокмешокме шокмешокмешок мешокмешокмешокмешо кмешокмешокмешокмешокме шокмешо кмешокмешокмешок мешокмешокмешо кмешокмешокмешокм ешокмешокмешокмешокм ешокмешокмешокмеш окмешокмешокме шокмешокмешокмешокмеш окмешокмешокмешокмешокмешо кмешокмешокмешокмешокмешокмеш окмешокмешокмешо кмешокмешокмешокмешокмешокме шокмешокмешок',
    date: '28 января 2022',
    card: '1',
  },
  {
    id: '2',
    author: 'Worthily',
    text: 'Говоно мешок',
    date: '28 января 2022',
    card: '1',
  },
  {
    id: '3',
    author: 'Worthily',
    text: 'Говоно мешок',
    date: '28 января 2022',
    card: '1',
  },
  {
    id: '4',
    author: 'Worthily',
    text: 'Говоно мешок',
    date: '28 января 2022',
    card: '2',
  },
  {
    id: '5',
    author: 'Worthily',
    text: 'Говоно мешок',
    date: '28 января 2022',
    card: '1',
  },
  {
    id: '6',
    author: 'Worthily',
    text: 'Говоно мешок',
    date: '28 января 2022',
    card: '3',
  },
];

const categoryInitialState: Category[] = [
  {
    id: '0',
    name: 'all',
  },
  {
    id: '1',
    name: 'Сухие смеси и грунтовки',
  },
  {
    id: '2',
    name: 'Изоляционные материалы',
  },
  {
    id: '3',
    name: 'Листовые материалы',
  },
  {
    id: '4',
    name: 'Кровля',
  },
  {
    id: '5',
    name: 'Наружная канализация',
  },
  {
    id: '6',
    name: 'Дорожные покрытия',
  },
  {
    id: '7',
    name: 'Облицовочные материалы',
  },
];

const ordersInitialState: Order[] = [];

export const userSlice = createSlice({
  name: 'cards',
  initialState: userInitialState,
  reducers: {
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
      };
      return newUser;
    },
    authorize: (
      state,
      { payload }: PayloadAction<{ email: string; password: string }>,
    ) => {
      // const newUser = {
      //   id: '1',
      //   name: payload.name,
      //   email: payload.email,
      //   password: payload.password,
      //   banned: false,
      //   banReason: '',
      //   role: 'user',
      // };
      // return newUser;
    },
  },
});

export const commentsSlice = createSlice({
  name: 'comments',
  initialState: commentsInitialState,
  reducers: {},
});
export const ordersSlice = createSlice({
  name: 'orders',
  initialState: ordersInitialState,
  reducers: {
    createOrder: (
      state,
      {
        payload,
      }: PayloadAction<{
        products: string;
        cost: string;
        user: string;
        adress: string;
      }>,
    ) => {
      const { products, cost, user, adress } = payload;
      let orderId = 0;
      let success = false;
      const commentsId: string[] = [];

      for (let order of state) {
        commentsId.push(order.id);
      }

      while (!success) {
        if (commentsId.indexOf(`${orderId}`) !== -1) {
          orderId++;
        } else {
          success = true;
        }
      }

      const order = {
        id: `${orderId}`,
        products: products,
        cost: cost,
        user: user,
        adress: adress,
      };
      const newArr = [...state, order];
      return newArr;
    },
    removeOrder: (
      state,
      {
        payload,
      }: PayloadAction<{
        id: string;
      }>,
    ) => {
      const newArr = state.filter((order) => {
        return order.id !== payload.id;
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
    removeProduct: (
      state,
      { payload }: PayloadAction<{ productId: string }>,
    ) => {
      let newArr: ProductInCart[] = state.filter((cart) => {
        return cart.id != payload.productId;
      });
      return newArr;
    },
    addCountProduct: (
      state,
      { payload }: PayloadAction<{ productId: string }>,
    ) => {
      let newArr = state.map((cart) => {
        if (cart.id === payload.productId) {
          const count = parseInt(cart.count) + 1;
          return { id: payload.productId, count: `${count}` };
        } else {
          return cart;
        }
      });
      return newArr;
    },
    subCountProduct: (
      state,
      { payload }: PayloadAction<{ productId: string }>,
    ) => {
      let newArr = state.map((cart) => {
        if (cart.id === payload.productId) {
          if (parseInt(cart.count) > 1) {
            const count = parseInt(cart.count) - 1;
            return { id: payload.productId, count: `${count}` };
          } else {
            return cart;
          }
        } else {
          return cart;
        }
      });
      return newArr;
    },
  },
  extraReducers: {
    [ordersSlice.actions.createOrder.type]: (state) => {
      const newArr: ProductInCart[] = [];
      return newArr;
    },
  },
});

export const cardsSlice = createSlice({
  name: 'cards',
  initialState: cardsInitialState,
  reducers: {
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

export const specialSlice = createSlice({
  name: 'special',
  initialState: specialInitialState,
  reducers: {
    showUserPopup: (state) => {
      const newState: Special = {
        showUserPopup: true,
        userLoggedIn: state.userLoggedIn,
      };
      return newState;
    },
    hideUserPopup: (state) => {
      const newState: Special = {
        showUserPopup: false,
        userLoggedIn: state.userLoggedIn,
      };
      return newState;
    },
    setUserLoggedIn: (
      state,
      { payload }: PayloadAction<{ logged: boolean }>,
    ) => {
      const newState: Special = {
        showUserPopup: state.showUserPopup,
        userLoggedIn: payload.logged,
      };
      return newState;
    },
  },
});

export const categorySlice = createSlice({
  name: 'category',
  initialState: categoryInitialState,
  reducers: {},
});

export const reducer = combineReducers({
  cards: cardsSlice.reducer,
  productInCart: cartSlice.reducer,
  user: userSlice.reducer,
  special: specialSlice.reducer,
  comments: commentsSlice.reducer,
  category: categorySlice.reducer,
  orders: ordersSlice.reducer,
});
