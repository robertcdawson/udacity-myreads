import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';
import './App.css';

function ListBooks(props) {
  const [currentlyReadingShelf, setCurrentlyReadingShelf] = useState({});
  const [wantToReadShelf, setWantToReadShelf] = useState({});
  const [readShelf, setReadShelf] = useState({});

  useEffect(() => {
    const books = Array.from(props.books);
    setCurrentlyReadingShelf(
      books.filter((book) => {
        return book.shelf === 'currentlyReading';
      }),
    );
    // const currentlyReadingShelf = books.filter((book) => {
    //   return book.shelf === 'currentlyReading';
    // });

    setWantToReadShelf(
      books.filter((book) => {
        return book.shelf === 'wantToRead';
      }),
    );
    // const wantToReadShelf = books.filter((book) => {
    //   return book.shelf === 'wantToRead';
    // });

    setReadShelf(
      books.filter((book) => {
        return book.shelf === 'read';
      }),
    );
    // const readShelf = books.filter((book) => {
    //   return book.shelf === 'read';
    // });
  });

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
                {Array.from(currentlyReadingShelf).map((book) => (
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
                          <select>
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
                {Array.from(wantToReadShelf).map((book) => (
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
                          <select>
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
                {Array.from(readShelf).map((book) => (
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
                          <select>
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
        <button onClick={() => navigate('/search/')}>Add a book</button>
      </div>
    </div>
  );
}

export default ListBooks;
