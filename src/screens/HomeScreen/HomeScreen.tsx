import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { State } from '../../types';
import Header from '../../components/Header';
import Catalog from '../../components/Catalog';
import ProductList from '../../components/ProductList';

function HomeScreen() {
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
