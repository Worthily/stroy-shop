import React from 'react';

function Catalog() {
  return (
    <div className="catalog">
      <div className="catalog__header">
        <div className="catalog__header-text">Каталог</div>
        <h2 className="catalog__header-h2">Стройматериалы</h2>
      </div>
      <div className="catalog__main">
        <ul className="catalog__list">
          <li className="catalog__list-item">Сухие смеси и грунтовки</li>
          <li className="catalog__list-item">Изоляционные материалы</li>
          <li className="catalog__list-item">Листовые материалы</li>
          <li className="catalog__list-item">Кровля</li>
          <li className="catalog__list-item">Наружная канализация</li>
          <li className="catalog__list-item">Дорожные покрытия</li>
          <li className="catalog__list-item">Облицовочные материалы</li>
        </ul>
      </div>
    </div>
  );
}

export default Catalog;
