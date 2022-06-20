import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  hideUserPopupActionCreator,
  setUserLoggedInActionCreator,
} from '../../store/actions';
import {
  authReqActionCreator,
  authRespActionCreator,
  exitProfileActionCreator,
  registrReqActionCreator,
  registrRespActionCreator,
} from '../../store/User/actions';
import { Form, Field } from 'react-final-form';
import exitImg from '../../assets/img/exit.png';
import { State } from '../../types';

function UserPopup() {
  const dispatch = useDispatch();
  const special = useSelector((state: State) => state.special);
  const user = useSelector((state: State) => state.user);
  const orders = useSelector((state: State) => state.orders);
  const [formChange, setFormChange] = useState(false);
  const registrForm = (
    <Form
      onSubmit={(formObj: {
        name: string;
        email: string;
        password: string;
      }) => {
        if (formObj.email && formObj.name && formObj.password) {
          if (
            formObj.email.trim() &&
            formObj.name.trim() &&
            formObj.password.trim()
          ) {
            dispatch(
              registrReqActionCreator({
                name: formObj.name,
                email: formObj.email,
                password: formObj.password,
              }),
            );
            dispatch(hideUserPopupActionCreator());
          }
        }
      }}>
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className="userPopup__form">
          <Field name="name">
            {({ input }) => (
              <input
                placeholder="Имя"
                type="text"
                className="userPopup__input"
                {...input}
              />
            )}
          </Field>
          <Field name="email">
            {({ input }) => (
              <input
                placeholder="E-mail"
                type="text"
                className="userPopup__input"
                {...input}></input>
            )}
          </Field>
          <Field name="password">
            {({ input }) => (
              <input
                placeholder="Пароль"
                type="text"
                className="userPopup__input"
                {...input}></input>
            )}
          </Field>
          <div
            onClick={() => {
              setFormChange(true);
            }}
            className="userPopup__change-form">
            Уже есть аккаунт?
          </div>
          <button type="submit" className="userPopup__btn">
            OK
          </button>
        </form>
      )}
    </Form>
  );

  const authForm = (
    <Form
      onSubmit={(formObj: { email: string; password: string }) => {
        if (formObj.email && formObj.password) {
          if (formObj.email.trim() && formObj.password.trim()) {
            dispatch(
              authReqActionCreator({
                email: formObj.email,
                password: formObj.password,
              }),
            );
            dispatch(hideUserPopupActionCreator());
          }
        }
      }}>
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className="userPopup__form">
          <Field name="email">
            {({ input }) => (
              <input
                placeholder="E-mail"
                type="text"
                className="userPopup__input"
                {...input}></input>
            )}
          </Field>
          <Field name="password">
            {({ input }) => (
              <input
                placeholder="Пароль"
                type="text"
                className="userPopup__input"
                {...input}></input>
            )}
          </Field>
          <div
            onClick={() => {
              setFormChange(false);
            }}
            className="userPopup__change-form">
            Нет аккаунта?
          </div>
          <button type="submit" className="userPopup__btn">
            OK
          </button>
        </form>
      )}
    </Form>
  );
  const element = (
    <>
      <div className="userPopup__title-wrapper">
        {formChange ? (
          <div className="userPopup__title">Авторизация</div>
        ) : (
          <div className="userPopup__title">Регистрация</div>
        )}
        <div
          onClick={() => {
            dispatch(hideUserPopupActionCreator());
          }}
          className="userPopup__exit">
          <img src={exitImg} alt="exit" className="userPopup__exit-img" />
        </div>
      </div>
      {formChange ? authForm : registrForm}
    </>
  );

  const userElement = (
    <>
      <div className="userPopup__user">
        <div className="userPopup__user-info">
          <div className="userPopup__user-info-name">{user.name}</div>
          <div className="userPopup__user-info-email">{user.email}</div>
          <div className="userPopup__user-info-orders">
            Заказов: {orders.length}
          </div>
          <div
            onClick={() => {
              dispatch(exitProfileActionCreator());
            }}
            className="userPopup__user-info-exit">
            Выйти из аккаунта
          </div>
        </div>
        <div
          onClick={() => {
            dispatch(hideUserPopupActionCreator());
          }}
          className="userPopup__user-exit">
          <img src={exitImg} alt="exit" className="userPopup__exit-img" />
        </div>
      </div>
    </>
  );

  return (
    <div
      onClick={() => {
        dispatch(hideUserPopupActionCreator());
      }}
      className="userPopup">
      <div className="userPopup__wrapper" onClick={(e) => e.stopPropagation()}>
        {user.logged ? userElement : element}
      </div>
    </div>
  );
}

export default UserPopup;
