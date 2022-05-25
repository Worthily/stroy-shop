import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import PageNotFoundScreen from './screens/PageNotFoundScreen';
import CartScreen from './screens/CartScreen';
import CatalogScreen from './screens/CatalogScreen';
import OrderListScreen from './screens/OrderListScreen';
import OrderScreen from './screens/OrderScreen';
import ProductScreen from './screens/ProductScreen';
import {
  HomeScreenRoute,
  CartScreenRoute,
  CatalogScreenRoute,
  OrderListScreenRoute,
  OrderScreenRoute,
  ProductScreenRoute,
} from './constants';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={HomeScreenRoute} element={<HomeScreen />} />
        <Route path={CartScreenRoute} element={<CartScreen />} />
        <Route path={CatalogScreenRoute} element={<CatalogScreen />} />
        <Route path={OrderListScreenRoute} element={<OrderListScreen />} />
        <Route path={OrderScreenRoute} element={<OrderScreen />} />
        <Route path={ProductScreenRoute} element={<ProductScreen />} />
        <Route path="*" element={<PageNotFoundScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
