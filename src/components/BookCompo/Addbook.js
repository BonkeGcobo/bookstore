import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../../redux/books/books'; // importing an addbook action

const Addbook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const addNewBook = (e) => {
    e.preventDefault();
    const newBook = {
      id: uuidv4(),
      title,
      author,
    };
    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
  };

  return (
    <div className="theForm">
      <h3 className="formTitle">ADD NEW BOOK</h3>
      <form className="input-form" onSubmit={(e) => addNewBook(e)}>
        <input type="text" placeholder="Book-title" className="bookTitle" onChange={(e) => setTitle(e.target.value)} required />
        <input type="text" placeholder="Author" className="author" onChange={(e) => setAuthor(e.target.value)} required />
        <button type="submit">Submit</button>
      </form>

    </div>

  );
};

export default Addbook;
