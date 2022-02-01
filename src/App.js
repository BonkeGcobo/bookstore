import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Books from './components/Books';
import './App.css';
import Categorie from './components/Categorie';

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="Categories" element={<Categorie />} />
    </Routes>
  </>
);

export default App;
