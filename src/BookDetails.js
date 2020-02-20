import React, { useState, useEffect } from "react";
import { navigate } from "@reach/router";
import "./App.css";
import * as BooksAPI from "./BooksAPI";

function BookDetails(props) {
  const bookId = props.bookId;
  const [bookInfo, setBookInfo] = useState({});

  useEffect(() => {
    BooksAPI.get(bookId).then(book => {
      setBookInfo(book);
    });
  }, [bookId]);

  const title = bookInfo.title;
  const subtitle = bookInfo.subtitle ? `: ${bookInfo.subtitle}` : "";
  const authors = [];
  const description = bookInfo.description;
  const infoLink = bookInfo.infoLink;
  const pageCount = bookInfo.pageCount;
  const publishedDate = bookInfo.publishedDate;
  const shelf = bookInfo.shelf;
  let shelfReadableName = "";

  if (shelf === "currentlyReading") shelfReadableName = "Currently Reading";
  else if (shelf === "wantToRead") shelfReadableName = "Want to Read";
  else if (shelf === "read") shelfReadableName = "Read";
  else shelfReadableName = "None";

  for (let i in bookInfo.authors) {
    authors.push(bookInfo.authors[i]);
  }

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="bookshelf">
        <p>
          <button
            className="navigation-button"
            onClick={() => {
              navigate("/");
            }}
          >
            &lt; Return to Bookshelf
          </button>
        </p>
        <div className="list-books-content">
          <div key={bookInfo.id}>
            <h2 className="bookshelf-title">
              {title}
              {subtitle}
              <span> ({shelfReadableName})</span>
            </h2>
            <p>
              {authors.map((author, index) => {
                if (authors.length > 1) {
                  if (index === authors.length - 2) {
                    return `${author}, `;
                  }
                }
                return author;
              })}
            </p>
            <p>Published {publishedDate}</p>
            <p>{pageCount} pages</p>
            <p>{description}</p>
            <p>
              <a href={infoLink}>Learn more.</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
