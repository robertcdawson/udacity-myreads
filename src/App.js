import React, { useState, useEffect } from 'react';
import { Router } from '@reach/router';
import * as BooksAPI from './BooksAPI';
import SearchBooks from './SearchBooks';
import ListBooks from './ListBooks';
import './App.css';

function BooksApp(props) {
  const [bookShelves, setBookShelves] = useState({});

  useEffect(() => {
    BooksAPI.getAll().then((books) => {
      setBookShelves(books);
    });
  });

  const changeShelf = BooksAPI.update;

  return (
    <div className="app">
      <Router>
        <ListBooks path="/" books={bookShelves} update={changeShelf} />
        <SearchBooks path="search" />
      </Router>
    </div>
  );
}

export default BooksApp;
