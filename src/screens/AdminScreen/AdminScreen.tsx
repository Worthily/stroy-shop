import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { State } from '../../types';
import Header from '../../components/Header';
import Catalog from '../../components/Catalog';
import ProductList from '../../components/ProductList';
import Footer from '../../components/Footer';
import UserPopup from '../../components/UserPopup';
import { Field, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { HomeScreenRoute } from '../../constants';
import send from '../../assets/img/send.png';
import {
  createPostReqActionCreator,
  getProductsReqActionCreator,
} from '../../store/Products/actions';

const schema = yup.object().shape({
  files: yup.mixed().test('required', 'pls select file', (value) => {
    return value && value.length;
  }),
});

function AdminScreen() {
  const dispatch = useDispatch();
  const special = useSelector((state: State) => state.special);
  const { showUserPopup } = special;
  let userPopup: JSX.Element = <></>;
  if (showUserPopup) {
    userPopup = <UserPopup />;
  }

  const navigate = useNavigate();

  const [error, setError] = useState('');
  const [img, setImg] = useState('');
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data: any) {
    const price = parseInt(data.price);
    dispatch(
      createPostReqActionCreator({
        title: data.title,
        content: data.content,
        discount: 1,
        categoryId: 1,
        specialMarksId: 1,
        price: price,
        image: data.files[0],
      }),
    );
    dispatch(getProductsReqActionCreator());
    navigate(HomeScreenRoute);
  }

  const postForm = (
    <div className="add-post">
      <form className="add-post__form" onSubmit={handleSubmit(onSubmit)}>
        <div className="add-post__form-lable">Название товара:</div>
        <input
          {...register('title')}
          name="title"
          type="text"
          className="add-post__form-input"
        />
        <div className="add-post__form-lable">Описание товара</div>
        <textarea
          {...register('content')}
          name="content"
          className="add-post__form-area"
        />
        <input
          {...register('files')}
          type="file"
          className="add-post__form-file"
        />
        <div className="add-post__form-lable">Изображение</div>
        <button type="submit" className="add-post__form-button">
          <img
            src={send}
            alt="send"
            id="image"
            className="add-post__form-button-img"
          />
        </button>
      </form>
      <img src={img} alt="" className="add-post__dwld-img" />
    </div>
  );

  return (
    <>
      <div className="homeScreen__wrapper screen__wrapper">
        <header className="header">
          <Header />
        </header>
        <main className="homeScreen__main">{postForm}</main>
      </div>
      {userPopup}
    </>
  );
}

export default AdminScreen;
