import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { State } from '../../types';
import Header from '../../components/Header';
import Catalog from '../../components/Catalog';
import ProductList from '../../components/ProductList';

function HomeScreen() {
  // const authorized = useSelector((state: State) => state.user.authorized);
  // const firstName = useSelector((state: State) => state.user.firstName);
  // const lastName = useSelector((state: State) => state.user.lastName);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (!authorized) {
  //     navigate(SignInRoute);
  //   }
  // });

  // <div>
  //   <h1>Добро пожаловать</h1>
  //   {/* <div>
  //     <span>{firstName}</span>
  //     <span>{lastName}</span>
  //   </div>
  //   <button
  //     onClick={() => {
  //       navigate(SignInRoute);
  //     }}>
  //     Sign out
  //   </button> */}
  // </div>

  return (
    <div className="homeScreen__wrapper">
      <header className="header">
        <Header />
      </header>
      <main className="homeScreen__main">
        <Catalog />
        <ProductList />
      </main>
      <footer className="footer"></footer>
    </div>
  );
}

export default HomeScreen;
