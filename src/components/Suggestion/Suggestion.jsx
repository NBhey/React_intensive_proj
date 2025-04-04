import React from 'react';
import { Link } from 'react-router-dom';
import './suggestion.css';

function Suggestion({ suggestions }) {
  return (
    <div className="container_suggestion">
      <div className="wrapper">
        <ul className="suggestion">
          {suggestions.map((item) => (
            <Link to={`/book/${item.id}`}>
            <li key={item.id} className="suggestion_item">
              <p>{item.title}</p>
              <p>{item.authors[0].name}</p>
            </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Suggestion;
