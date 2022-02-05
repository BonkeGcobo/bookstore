import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBookFromApi } from '../../redux/books/books';
import ProgressBar from './ProgressBar';

const BookInfo = (book) => {
  const dispatch = useDispatch();
  const { id, title, category } = book;

  const removeHandler = () => {
    dispatch(removeBookFromApi(id));
  };

  return (
    <div id={id} className="bookCard">
      <div className="BookDetails">
        <p className="category-sec">{category}</p>
        <h3>{title}</h3>

        <div className="theButtons">
          <button type="button" className="theBtns">Comments</button>
          <button type="button" className="theBtns delete" onClick={removeHandler}>Delete</button>
          <button type="button" className="theBtns">Edit</button>
        </div>
      </div>
      <ProgressBar />
    </div>
  );
};

export default BookInfo;
