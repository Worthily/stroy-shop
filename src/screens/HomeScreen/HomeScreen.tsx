import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { State } from '../../types';
import Header from '../../components/Header';
import Catalog from '../../components/Catalog';
import ProductList from '../../components/ProductList';
import Footer from '../../components/Footer';
import UserPopup from '../../components/UserPopup';

function HomeScreen() {
  const dispatch = useDispatch();
  const special = useSelector((state: State) => state.special);
  const { showUserPopup } = special;
  let userPopup: JSX.Element = <></>;
  if (showUserPopup) {
    userPopup = <UserPopup />;
  }
  return (
    <>
      <div className="homeScreen__wrapper screen__wrapper">
        <header className="header">
          <Header />
        </header>
        <main className="homeScreen__main">
          <Catalog current="0" />
          <ProductList category="0" />
        </main>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
      {userPopup}
    </>
  );
}

export default HomeScreen;
