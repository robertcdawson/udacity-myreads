import React from 'react';
import { navigate, Link } from '@reach/router';
import './App.css';

function NotFound(props) {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="centered-content">
        <p>
          Oops, wrong page! <Link to="/">Please try again.</Link>
        </p>
      </div>
      <div className="open-search">
        <button onClick={() => navigate('/search/')}>Add a book</button>
      </div>
    </div>
  );
}

export default NotFound;
