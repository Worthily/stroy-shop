import { api, apiAlt } from '..';
import { POSTS_LINK, SIGN_IN_LINK, SIGN_UP_LINK } from '../../constants';

export async function getProducts() {
  return await api.get(POSTS_LINK).catch((error) => {
    return error;
  });
}

export async function createPost(
  title: string,
  content: string,
  discount: number,
  price: number,
  categoryId: number,
  specialMarksId: number,
  image: any,
) {
  return await api
    .post(POSTS_LINK, {
      title: title,
      content: content,
      discount: discount,
      price: price,
      categoryId: categoryId,
      specialMarksId: specialMarksId,
      image: image,
    })
    .catch((error) => {
      return error;
    });
}
