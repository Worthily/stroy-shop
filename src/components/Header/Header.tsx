import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { showUserPopupActionCreator } from '../../store/actions';
import logo from '../../assets/img/logo.png';
import add01 from '../../assets/img/add01.png';
import add02 from '../../assets/img/add02.png';
import userIcn from '../../assets/img/avatar.png';
import cartIcn from '../../assets/img/shopping-cart.png';
import ordersIcn from '../../assets/img/order.png';
import {
  HomeScreenRoute,
  CartScreenRoute,
  CatalogScreenRoute,
  OrderListScreenRoute,
  ProductScreenRoute,
} from '../../constants';

function Header() {
  const dispatch = useDispatch();
  return (
    <div className="header__wrapper">
      <div className="header__logo-wrapper">
        <a href={HomeScreenRoute} className="">
          <img src={logo} alt="logo" className="header__logo" />
        </a>
      </div>
      <div className="header__add">
        <div className="header__add-1">
          <img src={add01} alt="" className="header__add-1-img" />
          <div className="header__add-1-text">
            бесплатная доставка товара от 800 руб
          </div>
        </div>
        <div className="header__add-2">
          <img src={add02} alt="" className="header__add-2-img" />
          <div className="header__add-2-text">
            Особые условия покупки от 5000 руб
          </div>
        </div>
      </div>
      <div className="header__buttons-wrapper">
        <a href={OrderListScreenRoute} className="header__buttons-orders">
          <img
            src={ordersIcn}
            alt="orders"
            className="header__buttons-orders-img"
          />
        </a>
        <div
          onClick={() => {
            dispatch(showUserPopupActionCreator());
          }}
          className="header__buttons-user">
          <img src={userIcn} alt="user" className="header__buttons-user-img" />
        </div>
        <div className="header__buttons-cart-wrapper">
          <a href={CartScreenRoute} className="header__buttons-cart">
            <img
              src={cartIcn}
              alt="cart"
              className="header__buttons-cart-img"
            />
            <div className="header__buttons-cart-text">Корзина</div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
