import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header';
import { State } from '../../types';
import cardImg from '../../assets/img/beton.webp';
import trash from '../../assets/img/trash.png';
import {
  addCountProductActionCreator,
  subCountProductActionCreator,
  removeProductActionCreator,
  createOrderActionCreator,
} from '../../store/actions';
import UserPopup from '../../components/UserPopup';
import { useNavigate } from 'react-router';
import { OrderListScreenRoute } from '../../constants';

function CartScreen() {
  const cards = useSelector((state: State) => state.cards);
  const user = useSelector((state: State) => state.user);
  const productInCart = useSelector((state: State) => state.productInCart);
  const special = useSelector((state: State) => state.special);
  const [inputVal, setInputVal] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { showUserPopup } = special;
  let userPopup: JSX.Element = <></>;
  if (showUserPopup) {
    userPopup = <UserPopup />;
  }
  let summ = 0;
  cards.map((card) => {
    return productInCart.map((item) => {
      if (item.id == card.id) {
        summ = summ + parseInt(item.count) * parseInt(card.cost);
      }
    });
  });

  function createOrder(summ: string) {
    const orderProdStr = JSON.stringify(productInCart);
    dispatch(
      createOrderActionCreator({
        products: orderProdStr,
        cost: `${summ}`,
        user: user.id,
        adress: inputVal,
      }),
    );
  }

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
              <div
                onClick={() => {
                  dispatch(
                    subCountProductActionCreator({
                      productId: card.id,
                    }),
                  );
                }}
                className="cart-screen__card-btn">
                -
              </div>
              <div className="cart-screen__card-value">{card.count}</div>
              <div
                onClick={() => {
                  dispatch(
                    addCountProductActionCreator({
                      productId: card.id,
                    }),
                  );
                }}
                className="cart-screen__card-btn">
                +
              </div>
            </div>
            <div className="cart-screen__card-price">
              {parseInt(card.count) * parseInt(item.cost)}руб
            </div>
            <div
              onClick={() => {
                console.log(card.id);
                dispatch(removeProductActionCreator({ productId: card.id }));
              }}>
              <img src={trash} alt="" className="cart-screen__card-remove" />
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
          <div className="cart-screen__order-input-wrapper">
            <div className="cart-screen__order-input-text">
              <input
                onChange={(evt) => {
                  setInputVal(evt.target.value);
                }}
                placeholder="Введите адрес доставки"
                type="text"
                className="cart-screen__order-input"
              />
            </div>
          </div>
          <div
            onClick={() => {
              createOrder(`${summ}`);
              navigate(OrderListScreenRoute);
            }}
            className="cart-screen__order-button">
            Оформить заказ
          </div>
        </div>
      </main>
      {userPopup}
    </div>
  );
}

export default CartScreen;
