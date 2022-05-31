import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { State } from '../../types';
import Card from '../Card';
import { ProductScreenRoute } from '../../constants';

function ProductList() {
  const cards = useSelector((state: State) => state.cards);

  const elements = cards.map((item) => {
    return (
      <li key={item.id} className="product-list__card-item">
        <Link
          to={`${ProductScreenRoute}/${item.id}`}
          className="product-list__card-link">
          <Card card={item} />
        </Link>
      </li>
    );
  });

  return (
    <div className="product-list">
      <ul className="product-list__cards">{elements}</ul>
    </div>
  );
}

export default ProductList;
