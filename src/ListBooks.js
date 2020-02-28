// import React, { useState, useEffect } from "react";
import React from "react";
import { navigate } from "@reach/router";
import "./App.css";

function ListBooks(props) {
  const updateBook = (book, event) => {
    props.update(book, event.target.value);
  };

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {Array.from(props.currentlyReadingShelf).map(book => (
                  <li key={book.id}>
                    <div className="book">
                      <div className="book-top">
                        <div
                          className="book-cover"
                          style={{
                            width: 128,
                            height: 193,
                            backgroundImage: `url("${book.imageLinks.smallThumbnail}")`,
                          }}
                          onClick={event =>
                            navigate(`details/${encodeURI(book.id)}`)
                          }
                        />
                        <div className="book-shelf-changer">
                          <select
                            value={book.shelf}
                            onChange={event => updateBook(book, event)}
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
          <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {Array.from(props.wantToReadShelf).map(book => (
                  <li key={book.id}>
                    <div className="book">
                      <div className="book-top">
                        <div
                          className="book-cover"
                          style={{
                            width: 128,
                            height: 193,
                            backgroundImage: `url("${book.imageLinks.smallThumbnail}")`,
                          }}
                          onClick={event =>
                            navigate(`details/${encodeURI(book.id)}`)
                          }
                        />
                        <div className="book-shelf-changer">
                          <select
                            value={book.shelf}
                            onChange={event => updateBook(book, event)}
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
          <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {Array.from(props.readShelf).map(book => (
                  <li key={book.id}>
                    <div className="book">
                      <div className="book-top">
                        <div
                          className="book-cover"
                          style={{
                            width: 128,
                            height: 193,
                            backgroundImage: `url("${book.imageLinks.smallThumbnail}")`,
                          }}
                          onClick={event =>
                            navigate(`details/${encodeURI(book.id)}`)
                          }
                        />
                        <div className="book-shelf-changer">
                          <select
                            value={book.shelf}
                            onChange={event => updateBook(book, event)}
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
        </div>
      </div>
      <div className="open-search">
        <button onClick={() => navigate("/search/")}>Add a book</button>
      </div>
    </div>
  );
}

export default ListBooks;
