import React from 'react';
import pays from '../../assets/img/pays.png';

function Footer() {
  return (
    <div className="footer__wrapper">
      <div className="footer__link-wrapper">
        <div className="footer__title">Компания</div>
        <ul className="footer__links">
          <li className="footer__link-wrapper">
            <a href="" className="footer__link">
              Наша компания
            </a>
          </li>
          <li className="footer__link-wrapper">
            <a href="" className="footer__link">
              Наши марки
            </a>
          </li>
          <li className="footer__link-wrapper">
            <a href="" className="footer__link">
              Каталог
            </a>
          </li>
          <li className="footer__link-wrapper">
            <a href="" className="footer__link">
              Как заказать
            </a>
          </li>
          <li className="footer__link-wrapper">
            <a href="" className="footer__link">
              Ваши заказы
            </a>
          </li>
          <li className="footer__link-wrapper">
            <a href="" className="footer__link">
              Как нас найти
            </a>
          </li>
        </ul>
      </div>
      <div className="footer__payment">
        <div className="footer__payment-text">Мы принимаем:</div>
        <div className="footer__payment-list">
          <img
            src={pays}
            alt="pays"
            className="footer__payment-list-item-img"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
