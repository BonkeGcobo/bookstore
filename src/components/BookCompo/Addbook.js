import React from 'react';

function Addbook() {
  return (
    <form className="input-form">
      <h3 className="formTitle">ADD NEW BOOK</h3>
      <input type="text" placeholder="Book-title" />
      <select placeholder="Category">
        <option value="Action">Action</option>
        <option value="Comedy">Comedy</option>
      </select>

    </form>
  );
}

export default Addbook;
