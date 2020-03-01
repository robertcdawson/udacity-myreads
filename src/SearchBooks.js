import React, { useState } from 'react';
import { navigate } from '@reach/router';
import * as BooksAPI from './BooksAPI';
import './App.css';

function SearchBooks(props) {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState({});

  const updateQuery = (queryParam) => {
    setQuery(queryParam);
    if (queryParam !== '') {
      BooksAPI.search(queryParam).then((results) => {
        setBooks(results);
      });
    } else setBooks({});
  };

  const updateBook = (book, event) => {
    props.update(book, event.target.value);
  };

  const getShelf = (book) => {
    const foundBook = Array.from(props.bookShelves).filter((bookToCompare) => {
      return bookToCompare.id === book.id;
    });
    return foundBook[0].shelf;
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <button
          className="close-search"
          onClick={() => {
            navigate(`/`);
          }}
        >
          Close
        </button>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            value={query}
            onChange={(event) => updateQuery(event.target.value)}
            autoFocus
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {Array.from(books).map((book) => {
            const thumbnail = book.hasOwnProperty('imageLinks')
              ? book.imageLinks.smallThumbnail
              : '';
            // const foundBook = Array.from(props.bookShelves).filter(
            //   (bookToCompare) => {
            //     return bookToCompare.id === book.id;
            //   },
            // );
            console.log(getShelf(book));
            return (
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <div
                      className="book-cover"
                      style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url("${thumbnail}")`,
                      }}
                    />
                    <div className="book-shelf-changer">
                      <select
                        value="none"
                        onChange={(event) => updateBook(book, event)}
                      >
                        <option value="move" disabled>
                          Move to...
                        </option>
                        <option value="currentlyReading">
                          Currently Reading
                        </option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">
                    {book.authors && book.authors.join(', ')}
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default SearchBooks;
