import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CatalogScreenRoute } from '../../constants';
import { State } from '../../types';

function Catalog(props: { current: string }) {
  const category = useSelector((state: State) => state.category);

  const categoryList = category.map((item) => {
    if (item.id == '0') {
      return <div key={item.id}></div>;
    } else {
      return (
        <li key={item.id} className="catalog__list-item">
          <Link
            className="catalog__list-item"
            to={`${CatalogScreenRoute}/${item.id}`}>
            {item.name}
          </Link>
        </li>
      );
    }
  });

  const currentCategory = category.find((item) => {
    return item.id == props.current;
  });

  let navigation = <></>;

  if (currentCategory) {
    if (currentCategory.id == '0') {
      navigation = (
        <div className="catalog__header-text">
          <Link className="catalog__nav-text" to={`${CatalogScreenRoute}/0`}>
            Каталог
          </Link>
        </div>
      );
    } else {
      navigation = (
        <div className="catalog__header-text">
          <Link className="catalog__nav-text" to={`${CatalogScreenRoute}/0`}>
            Каталог
          </Link>
          {' > '} {currentCategory.name}
        </div>
      );
    }
  }

  return (
    <div className="catalog">
      <div className="catalog__header">
        {navigation}
        <h2 className="catalog__header-h2">Стройматериалы</h2>
      </div>
      <div className="catalog__main">
        <ul className="catalog__list">{categoryList}</ul>
      </div>
    </div>
  );
}

export default Catalog;
