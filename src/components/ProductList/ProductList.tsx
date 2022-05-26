import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { State } from '../../types';

function ProductList() {
  const cards = useSelector((state: State) => state.cards);

  const elements = cards.map((item) => {
    return (
      <li key={item.id} className="product-list__card-item">
        {item.id},{item.title}
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
