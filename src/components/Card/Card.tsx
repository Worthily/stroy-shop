import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Cards, State } from '../../types';
import cardImg from '../../assets/img/beton.webp';
import {
  setInCartActionCreator,
  addNewProductActionCreator,
} from '../../store/actions';

function Card(props: { card: Cards }) {
  const { card } = props;
  const content = card.content.substr(0, 75) + '...';
  const dispatch = useDispatch();
  let button = <></>;
  if (card.isInCart) {
    button = <div className="card__button-clicked">В корзинe</div>;
  } else {
    button = (
      <div
        onClick={() => {
          dispatch(setInCartActionCreator({ cardId: card.id }));
          dispatch(addNewProductActionCreator({ productId: card.id }));
        }}
        className="card__button">
        В корзину
      </div>
    );
  }
  return (
    <div className="card">
      <img src={cardImg} alt="" className="card__img" />
      <div className="card__title">{card.title}</div>
      <div className="card__text">{content}</div>
      <div className="card__cost">{card.cost + '/шт'}</div>
      {button}
    </div>
  );
}

export default Card;
