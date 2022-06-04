import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Cards, State } from '../../types';
import cardImg from '../../assets/img/beton.webp';
import {
  setInCartActionCreator,
  addNewProductActionCreator,
  removeProductActionCreator,
} from '../../store/actions';
import { ProductScreenRoute } from '../../constants';

function Card(props: { card: Cards }) {
  const { card } = props;
  const content = card.content.substr(0, 75) + '...';
  const dispatch = useDispatch();
  let button = <></>;
  if (card.isInCart) {
    button = (
      <div
        onClick={() => {
          dispatch(
            setInCartActionCreator({ cardId: card.id, isInCart: false }),
          );
          dispatch(removeProductActionCreator({ productId: card.id }));
        }}
        className="card__button-clicked">
        <div className="card__button-text">В корзинe</div>
        <div className="card__button-hover">Убрать из корзины</div>
      </div>
    );
  } else {
    button = (
      <div
        onClick={() => {
          dispatch(setInCartActionCreator({ cardId: card.id, isInCart: true }));
          dispatch(addNewProductActionCreator({ productId: card.id }));
        }}
        className="card__button">
        В корзину
      </div>
    );
  }
  return (
    <div className="card">
      <Link
        to={`${ProductScreenRoute}/${card.id}`}
        className="product-list__card-link">
        <img src={cardImg} alt="" className="card__img" />
        <div className="card__title">{card.title}</div>
        <div className="card__text">{content}</div>
        <div className="card__cost">{card.cost + '/шт'}</div>
      </Link>
      {button}
    </div>
  );
}

export default Card;
