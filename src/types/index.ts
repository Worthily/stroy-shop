export type Cards = {
  id: string;
  title: string;
  content: string;
  cost: string;
  image: string;
  categoryId: string;
  specialMarksId: string;
  isInCart: boolean;
};

export type ProductInCart = {
  id: string;
  count: string;
};

export type Comments = {
  id: string;
  author: string;
  text: string;
  card: string;
  date: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  banned: boolean;
  banReason: string;
  role: string;
  token: string;
  logged: boolean;
};

export type Category = {
  id: string;
  name: string;
};

export type Special = {
  showUserPopup: boolean;
  userLoggedIn: boolean;
};

export type Order = {
  id: string;
  products: string;
  cost: string;
  user: string;
  adress: string;
};

export type State = {
  productInCart: ProductInCart[];
  category: Category[];
  cards: Cards[];
  user: User;
  special: Special;
  comments: Comments[];
  orders: Order[];
};
