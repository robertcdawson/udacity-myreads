import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import * as BooksAPI from "./BooksAPI";
import SearchBooks from "./SearchBooks";
import ListBooks from "./ListBooks";
import BookDetails from "./BookDetails";
import "./App.css";

function BooksApp(props) {
  const [bookShelves, setBookShelves] = useState({});
  const [currentlyReadingShelf, setCurrentlyReadingShelf] = useState({});
  const [wantToReadShelf, setWantToReadShelf] = useState({});
  const [readShelf, setReadShelf] = useState({});

  useEffect(() => {
    BooksAPI.getAll()
      .then(books => {
        setBookShelves(books);
      })
      .then(() => {
        setCurrentlyReadingShelf(
          Array.from(bookShelves).filter(book => {
            return book.shelf === "currentlyReading";
          })
        );

        setWantToReadShelf(
          Array.from(bookShelves).filter(book => {
            return book.shelf === "wantToRead";
          })
        );

        setReadShelf(
          Array.from(bookShelves).filter(book => {
            return book.shelf === "read";
          })
        );
      });
  }, [bookShelves]);

  const changeShelf = BooksAPI.update;

  return (
    <div className="app">
      <Router>
        <ListBooks
          path="/"
          currentlyReadingShelf={currentlyReadingShelf}
          wantToReadShelf={wantToReadShelf}
          readShelf={readShelf}
          update={changeShelf}
        />
        <SearchBooks path="search" update={changeShelf} />
        <BookDetails path="details/:bookId" />
      </Router>
    </div>
  );
}

export default BooksApp;
