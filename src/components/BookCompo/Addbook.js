import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../../redux/books/books'; // importing an addbook action

const Addbook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
  const authID = 'Vhj3H23NumCJKKYKw9dH/books';

  const submitData = async (title, category) => {
    const response = await fetch(baseUrl + authID, {
      method: 'POST',
      body: JSON.stringify({
        item_id: uuidv4(),
        title,
        category,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    console.log(response);
    return response;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitData(title, category).then((response) => {
      if (response.ok) {
        dispatch(addBook({
          id: uuidv4(), title, category,
        }));
      }
    });
    setTitle('');
    setCategory('');
  };

  return (
    <div className="theForm">
      <h3 className="formTitle">ADD NEW BOOK</h3>
      <form className="input-form" onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="Book-title" className="bookTitle" onChange={(e) => setTitle(e.target.value)} required />
        <input type="text" placeholder="Category" className="category" onChange={(e) => setCategory(e.target.value)} required />
        <button type="submit">Submit</button>
      </form>

    </div>

  );
};

export default Addbook;
