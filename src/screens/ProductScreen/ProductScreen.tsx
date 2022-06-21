import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import UserPopup from '../../components/UserPopup';
import CommentList from '../../components/CommentList';
import { State } from '../../types';
import cardImg from '../../assets/img/beton.webp';
import {
  addNewProductActionCreator,
  removeProductActionCreator,
  addCountProductActionCreator,
  subCountProductActionCreator,
} from '../../store/actions';
import ProductList from '../../components/ProductList';
import { setInCartActionCreator } from '../../store/Products/actions';

function ProductScreen() {
  const { id } = useParams();
  const special = useSelector((state: State) => state.special);
  const cards = useSelector((state: State) => state.cards);
  const cart = useSelector((state: State) => state.productInCart);
  const card = cards.find((item) => item.id == id);
  const posInCart = cart.find((item) => item.id == id);
  const [navig, setNavig] = useState('1');
  const dispatch = useDispatch();
  const { showUserPopup } = special;
  let userPopup: JSX.Element = <></>;
  if (showUserPopup) {
    userPopup = <UserPopup />;
  }

  let button = <></>;
  if (card) {
    if (card.isInCart) {
      button = (
        <div
          onClick={() => {
            dispatch(
              setInCartActionCreator({ cardId: card.id, isInCart: false }),
            );
            dispatch(removeProductActionCreator({ productId: card.id }));
          }}
          className="card__button-clicked">
          <div className="card__button-text">В корзинe</div>
          <div className="card__button-hover">Убрать из корзины</div>
        </div>
      );
    } else {
      button = (
        <div
          onClick={() => {
            dispatch(
              setInCartActionCreator({ cardId: card.id, isInCart: true }),
            );
            dispatch(addNewProductActionCreator({ productId: card.id }));
          }}
          className="card__button">
          В корзину
        </div>
      );
    }
  }

  let activeStyle = 'productScreen__nav-item item-active';
  let notActiveStyle = 'productScreen__nav-item';

  let infoBlock: JSX.Element = <></>;
  if (card) {
    if (navig == '1') {
      infoBlock = (
        <div className="productScreen__descr-wrapper">
          <div className="productScreen__descr-title">Описание</div>
          <div className="productScreen__descr-text">{card.content}</div>
        </div>
      );
    } else if (navig == '2') {
      infoBlock = <ProductList category={card.categoryId} />;
    } else if (navig == '3') {
      infoBlock = <CommentList card={card.id} />;
    }
  }

  let countButtons: JSX.Element = <></>;

  if (card) {
    if (card.isInCart) {
      countButtons = (
        <div className="productScreen__card-addCount-wrapper">
          <div
            onClick={() => {
              dispatch(
                subCountProductActionCreator({
                  productId: card.id,
                }),
              );
            }}
            className="productScreen__card-sub">
            -
          </div>
          <div className="productScreen__card-count">{posInCart?.count}</div>
          <div
            onClick={() => {
              dispatch(
                addCountProductActionCreator({
                  productId: card.id,
                }),
              );
            }}
            className="productScreen__card-add">
            +
          </div>
        </div>
      );
    }
  }

  if (card) {
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
                <div className="productScreen__card-cost">{card?.cost}/шт</div>
                <div className="productScreen__card-buttons-wrapper">
                  {button}
                  {countButtons}
                </div>
              </div>
            </div>
            <div className="productScreen__info">
              <div className="productScreen__info-nav">
                <div
                  onClick={() => {
                    setNavig('1');
                  }}
                  className={navig == '1' ? activeStyle : notActiveStyle}>
                  Описание
                </div>
                <div
                  onClick={() => {
                    setNavig('2');
                  }}
                  className={navig == '2' ? activeStyle : notActiveStyle}>
                  Похожие товары
                </div>
                <div
                  onClick={() => {
                    setNavig('3');
                  }}
                  className={navig == '3' ? activeStyle : notActiveStyle}>
                  Отзывы
                </div>
              </div>
              <div className="productScreen__info-content">{infoBlock}</div>
            </div>
          </main>
          <footer className="footer">
            <Footer />
          </footer>
        </div>
        {userPopup}
      </>
    );
  } else {
    return <></>;
  }
}

export default ProductScreen;
