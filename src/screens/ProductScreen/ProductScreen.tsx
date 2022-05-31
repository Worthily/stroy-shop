import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import UserPopup from '../../components/UserPopup';
import { State } from '../../types';
import cardImg from '../../assets/img/beton.webp';
import {
  addNewProductActionCreator,
  setInCartActionCreator,
} from '../../store/actions';

function ProductScreen() {
  const { id } = useParams();
  const cards = useSelector((state: State) => state.cards);
  const card = cards.find((item) => item.id == id);
  const special = useSelector((state: State) => state.special);
  const dispatch = useDispatch();
  const { showUserPopup } = special;
  let userPopup: JSX.Element = <></>;
  if (showUserPopup) {
    userPopup = <UserPopup />;
  }

  let button = <></>;
  if (card) {
    if (card.isInCart) {
      button = <div className="card__button-clicked">В корзинe</div>;
    } else {
      button = (
        <div
          onClick={() => {
            dispatch(setInCartActionCreator({ cardId: card.id }));
            dispatch(addNewProductActionCreator({ productId: card.id }));
          }}
          className="card__button">
          В корзину
        </div>
      );
    }
  }

  return (
    <>
      <div className="productScreen__wrapper screen__wrapper">
        <header className="header">
          <Header />
        </header>
        <main className="productScreen__main">
          <div className="productScreen__card">
            <img
              src={cardImg}
              alt="product"
              className="productScreen__card-img"
            />
            <div className="productScreen__card-info">
              <div className="productScreen__card-title">{card?.title}</div>
              <div className="productScreen__card-cost">{card?.cost}р /шт</div>
              <div className="productScreen__card-buttons-wrapper">
                {button}
                <div className="productScreen__card-addCount-wrapper">
                  <div className="productScreen__card-sub">-</div>
                  <div className="productScreen__card-count">1</div>
                  <div className="productScreen__card-add">+</div>
                </div>
              </div>
            </div>
          </div>
          <div className="productScreen__info">
            <div className="productScreen__info-nav">
              <div className="productScreen__nav-item">Описание</div>
              <div className="productScreen__nav-item">Похожие товары</div>
              <div className="productScreen__nav-item">Отзывы</div>
            </div>
            <div className="productScreen__info-content"></div>
          </div>
        </main>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
      {userPopup}
    </>
  );
}

export default ProductScreen;
