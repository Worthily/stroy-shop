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
};

export type User = {
  id: string;
  name: string;
  email: string;
  banned: string;
  banReason: string;
  admin: boolean;
};

export type Category = {
  id: string;
  name: string;
};

export type State = {
  productInCart: ProductInCart[];
  cards: Cards[];
};
