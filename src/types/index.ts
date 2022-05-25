export type Cards = {
  id: string;
  title: string;
  content: string;
  image: string;
  categoryId: string;
  specialMarksId: string;
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
  user: User;
  comments: Comments[];
  cards: Cards[];
  category: Category[];
};
