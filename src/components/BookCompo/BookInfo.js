import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';

const BookInfo = (book) => {
  const dispatch = useDispatch();
  const { id, title, author } = book;
  const removeHandler = () => {
    dispatch(removeBook(id));
  };
  return (
    <div id={id}>
      <h3>{title}</h3>
      <p>{author}</p>
      <button type="button" onClick={removeHandler}>Delete</button>
    </div>
  );
};

export default BookInfo;
