import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CatalogScreenRoute } from '../../constants';
import { Cards, Order, State } from '../../types';
import cardImg from '../../assets/img/beton.webp';

function Orders(props: { order: Order }) {
  const { id, products, cost, user, adress } = props.order;
  const userName = useSelector((state: State) => state.user.name);
  const cards = useSelector((state: State) => state.cards);
  const product = JSON.parse(products);

  const productsInOrder = product.map((card: any) => {
    return cards.find((item) => {
      if (item.id == card.id) {
        return item;
      }
    });
  });

  const elements = productsInOrder.map((card: any) => {
    const countProd = product.find((item: any) => {
      if (card.id == item.id) {
        return item;
      }
    });

    return (
      <div key={parseInt(card.id)}>
        <li className="cart-screen__card">
          <div className="cart-screen__card-header">
            <img
              src={cardImg}
              alt="Card Img"
              className="cart-screen__card-img"
            />
            <div className="cart-screen__card-title">{card.title}</div>
          </div>
          <div className="cart-screen__card-count-wrapper">
            <div className="cart-screen__card-value">{countProd.count}шт </div>
          </div>
          <div className="cart-screen__card-price">
            {parseInt(countProd.count) * parseInt(card.cost)}руб
          </div>
        </li>
      </div>
    );
  });

  return (
    <div className="order">
      <div className="order__header">
        <div className="order__header-title">Заказ № {id}</div>
        <div className="order__header-text">Заказ принят!</div>
      </div>
      <ul className="order__main">{elements}</ul>
      <div className="order__footer">
        <div className="order__footer-title">
          Спасибо, {userName}! Ваш заказ принят!
        </div>
        <div className="order__footer-text">
          <div className="order__footer-cost">Сумма заказа: {cost} руб</div>
          <div className="order__footer-adress">Адрес доставки: {adress}</div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
