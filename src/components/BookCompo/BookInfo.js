import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBookFromApi } from '../../redux/books/books';

const BookInfo = (book) => {
  const dispatch = useDispatch();
  const { id, title, Categorie } = book;

  const removeHandler = () => {
    dispatch(removeBookFromApi(id));
  };

  return (
    <div id={id}>
      <h3>{title}</h3>
      <p>{Categorie}</p>
      <button type="button" onClick={removeHandler}>Delete</button>
    </div>
  );
};

export default BookInfo;
