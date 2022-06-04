import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { State } from '../../types';
import Card from '../Card';
import { ProductScreenRoute } from '../../constants';

function ProductList(props: { category: string }) {
  const cards = useSelector((state: State) => state.cards);
  const categoriedCards = cards.filter((card) => {
    return card.categoryId == props.category || props.category == '0';
  });
  const elements = categoriedCards.map((item) => {
    return (
      <li key={item.id} className="product-list__card-item">
        <Card card={item} />
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
