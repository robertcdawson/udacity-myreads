import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';
import './App.css';

function SearchBooks(props) {
  const [query, setQuery] = useState('');
  const books = Array.from(props.books);

  const showingBooks =
    query === ''
      ? {}
      : books.filter((book) =>
          book.title.toLowerCase().includes(query.toLowerCase()),
        );

  const updateQuery = (query) => {
    setQuery(query);
  };

  const updateBook = (book, event) => {
    props.update(book, event.target.value);
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
          {/*
                NOTES: The search from BooksAPI is limited to a particular set of search terms.
                You can find these search terms here:
                https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                you don't find a specific author or title. Every search is limited by search terms.
              */}
          <input
            type="text"
            placeholder="Search by title or author"
            value={query}
            onChange={(event) => updateQuery(event.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {Array.from(showingBooks).map((book) => (
            <li key={book.id}>
              <div className="book">
                <div className="book-top">
                  <div
                    className="book-cover"
                    style={{
                      width: 128,
                      height: 193,
                      backgroundImage: `url("${
                        book.imageLinks.smallThumbnail
                      }")`,
                    }}
                  />
                  <div className="book-shelf-changer">
                    <select
                      value={book.shelf}
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
                  {book.authors.map((author, index) => {
                    if (book.authors.length > 1) {
                      if (index === book.authors.length - 2) {
                        return `${author}, `;
                      }
                    }
                    return author;
                  })}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default SearchBooks;
