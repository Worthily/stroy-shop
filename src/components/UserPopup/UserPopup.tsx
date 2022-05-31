import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  registrActionCreator,
  hideUserPopupActionCreator,
  setUserLoggedInActionCreator,
} from '../../store/actions';
import { Form, Field } from 'react-final-form';
import exitImg from '../../assets/img/exit.png';
import { State } from '../../types';

function UserPopup() {
  const dispatch = useDispatch();
  const special = useSelector((state: State) => state.special);
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
              registrActionCreator({
                name: formObj.name,
                email: formObj.email,
                password: formObj.password,
              }),
            );
            dispatch(hideUserPopupActionCreator());
            dispatch(setUserLoggedInActionCreator({ logged: true }));
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
            // dispatch(
            //   registrActionCreator({
            //     name: formObj.name,
            //     email: formObj.email,
            //     password: formObj.password,
            //   }),
            // );
            dispatch(hideUserPopupActionCreator());
            dispatch(setUserLoggedInActionCreator({ logged: true }));
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

  return (
    <div
      onClick={() => {
        dispatch(hideUserPopupActionCreator());
      }}
      className="userPopup">
      <div className="userPopup__wrapper" onClick={(e) => e.stopPropagation()}>
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
      </div>
    </div>
  );
}

export default UserPopup;
