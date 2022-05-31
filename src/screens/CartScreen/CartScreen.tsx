import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../../components/Card';
import Header from '../../components/Header';
import { Cards, State } from '../../types';
import cardImg from '../../assets/img/beton.webp';

function CartScreen() {
  const cards = useSelector((state: State) => state.cards);
  const productInCart = useSelector((state: State) => state.productInCart);
  let card: Cards;
  let products: Cards[] = [];

  let summ: number = 0;
  cards.map((card) => {
    return productInCart.map((item) => {
      if (item.id == card.id) {
        summ = summ + parseInt(item.count) * parseInt(card.cost);
      }
    });
  });

  const elements = productInCart.map((card) => {
    return cards.map((item) => {
      if (item.id == card.id) {
        return (
          <li key={item.id} className="cart-screen__card">
            <div className="cart-screen__card-header">
              <img
                src={cardImg}
                alt="Card Img"
                className="cart-screen__card-img"
              />
              <div className="cart-screen__card-title">{item.title}</div>
            </div>
            <div className="cart-screen__card-count-wrapper">
              <div className="cart-screen__card-btn">-</div>
              <div className="cart-screen__card-value">{card.count}</div>
              <div className="cart-screen__card-btn">+</div>
            </div>
            <div className="cart-screen__card-price">
              {parseInt(card.count) * parseInt(item.cost)}руб
            </div>
          </li>
        );
      }
    });
  });
  return (
    <div className="cart-screen">
      <header className="header">
        <Header />
      </header>
      <main className="cart-screen__main">
        <ul className="cart-screen__cards">{elements}</ul>
        <div className="cart-screen__order">
          <div className="cart-screen__order-wrapper-1">
            <div className="cart-screen__order-text">
              Товары({productInCart.length})
            </div>
            <div className="cart-screen__order-summ-1">{summ}руб</div>
          </div>
          <div className="cart-screen__order-wrapper-2">
            <div className="cart-screen__order-title">Итого:</div>
            <div className="cart-screen__order-summ-2">{summ}руб</div>
          </div>
          <div className="cart-screen__order-button">Оформить заказ</div>
        </div>
      </main>
    </div>
  );
}

export default CartScreen;
