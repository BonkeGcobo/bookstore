import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookInfo from './BookInfo';
import { fetchBooksApi } from '../../redux/books/books';

const BookList = () => {
  const bookArray = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooksApi());
  }, []);

  return (
    <div className="bookList">
      {bookArray.length ? (bookArray.map((book) => (
        <BookInfo
          id={book.id}
          key={book.id}
          title={book.title}
          category={book.category}
        />
      ))
      ) : (
        <h3 className="Empty book">
          No books in store
        </h3>
      )}
    </div>
  );
};

export default BookList;
