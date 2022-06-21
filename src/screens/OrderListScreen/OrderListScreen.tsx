import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import UserPopup from '../../components/UserPopup';
import { State } from '../../types';
import Order from '../../components/Orders';

function OrderListScreen() {
  const dispatch = useDispatch();
  const user = useSelector((state: State) => state.user);
  const special = useSelector((state: State) => state.special);
  const ordersList = useSelector((state: State) => state.orders);
  const orders = ordersList.filter((item) => item.user == user.id);
  const { showUserPopup } = special;
  let userPopup: JSX.Element = <></>;
  if (showUserPopup) {
    userPopup = <UserPopup />;
  }

  const elements = orders.map((item) => {
    return (
      <li key={item.id} className="order__wrapper">
        <Order order={item} />
      </li>
    );
  });

  return (
    <>
      <div className="homeScreen__wrapper screen__wrapper">
        <header className="header">
          <Header />
        </header>
        <main className="">
          <ul className="orders__wrapper">{elements}</ul>
        </main>
      </div>
      {userPopup}
    </>
  );
}

export default OrderListScreen;
