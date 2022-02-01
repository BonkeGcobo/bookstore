import React from 'react';
import BookList from './BookCompo/BookList';
import Addbook from './BookCompo/Addbook';

const Books = () => (
  <div className="BookSection">
    <BookList />
    <Addbook />
  </div>
);

export default Books;
