import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookInfo from './BookInfo';
import { fetchApi } from '../../redux/books/books';

const BookList = () => {
  const bookArray = useSelector((state) => state.booksReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchApi());
  }, [dispatch]);

  return (
    <div>
      <h2>Books list</h2>
      {
        bookArray.map((book) => {
          const { id, title, author } = book;
          return (
            <BookInfo
              key={id}
              id={id}
              title={title}
              author={author}
            />
          );
        })
      }
    </div>
  );
};

export default BookList;
