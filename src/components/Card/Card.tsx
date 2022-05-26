import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Cards, State } from '../../types';
import cardImg from '../../assets/img/beton.webp';

function Card(props: { card: Cards }) {
  const { card } = props;
  const cards = useSelector((state: State) => state.cards);

  return (
    <div className="card">
      <img src={cardImg} alt="" className="card__img" />
      <div className="card__title">{card.title}</div>
      <div className="card__text">{card.content}</div>
      <div className="card__cost">{card.cost}/шт</div>
      <div className="card__button">В корзину</div>
    </div>
  );
}

export default Card;
