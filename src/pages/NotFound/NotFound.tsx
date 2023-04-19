import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound(): JSX.Element {
  return (
    <div className="notfound">
      <h1 className="notfound__title">404</h1>
      <p className="notfound__text">
        Oh no! It looks like you&apos;ve stumbled upon the infamous Page 404 - the land of lost
        pages and digital tumbleweeds.
      </p>
      <Link to="/">
        <button className="notfound__button">HOME PAGE</button>
      </Link>
    </div>
  );
}

export default NotFound;
