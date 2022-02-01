import React from 'react';
import BookInfo from './BookInfo';

const BookList = () => {
  const bookArray = [
    { id: 1, title: 'Born a crime', author: 'Trevor Noah' },
    { id: 2, title: 'The Good Spice', author: 'Madix' },
  ];

  return (
    <div>
      <h2>Books list</h2>
      {
        bookArray.map((book) => {
          const { id, title, author } = book;
          return (
            <BookInfo
              key={id}
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
