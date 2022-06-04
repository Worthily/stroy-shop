import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { State } from '../../types';
import Header from '../../components/Header';
import Catalog from '../../components/Catalog';
import ProductList from '../../components/ProductList';
import Footer from '../../components/Footer';
import UserPopup from '../../components/UserPopup';

function CatalogScreen() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const special = useSelector((state: State) => state.special);
  const { showUserPopup } = special;
  let userPopup: JSX.Element = <></>;
  if (showUserPopup) {
    userPopup = <UserPopup />;
  }
  let productList = <></>;
  if (id) {
    productList = <ProductList category={id} />;
  } else {
    productList = <div className="">Указанной категории не существует :(</div>;
  }

  return (
    <>
      <div className="homeScreen__wrapper screen__wrapper">
        <header className="header">
          <Header />
        </header>
        <main className="homeScreen__main">
          <Catalog current={id ? id : '0'} />
          {productList}
        </main>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
      {userPopup}
    </>
  );
}

export default CatalogScreen;
