import React from 'react';
import './suggestion.css';
function Suggestion({ suggestions }) {
  return (
    <div className="container_suggestion">
      <div className="wrapper">
        <ul className="suggestion">
          {suggestions.map((item) => (
            
            <li key={item.id} className="suggestion_item">
              <p>{item.title}</p>
              <p>{item.authors[0].name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Suggestion;
