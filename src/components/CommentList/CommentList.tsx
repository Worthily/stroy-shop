import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../../types';

function CommentList(props: { card: string }) {
  const dispatch = useDispatch();
  const commentsState = useSelector((state: State) => state.comments);
  const { card } = props;
  const cardComments = commentsState.map((item) => {
    if (item.card == card) {
      return item;
    }
  });
  let comments = cardComments.map((item) => {
    if (item) {
      return (
        <div key={item.id} className="commentList__comment">
          <div key={item.id} className="commentList__comment-wrapper">
            <div className="commentList__comment-author">{item.author}</div>
            <div className="commentList__comment-date">{item.date}</div>
            <div className="commentList__comment-text">{item.text}</div>
          </div>
        </div>
      );
    }
  });
  return (
    <div className="commentList__wrapper">
      <div className="">Все отзывы</div>
      <div className="">
        {comments[0] ? (
          comments
        ) : (
          <div className="commentList__comments">
            <div className="commentList__sorry">
              Отзывов к данному товару не найдено :(
            </div>
            <div className="commentList__text">Оставьте отзыв первым!</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CommentList;
