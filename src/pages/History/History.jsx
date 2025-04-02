import React from 'react';
import './history.css';

function History(props) {
  const history = [
    { input: 'что-то написано', lang: 'en', sort: 'popular' },
    { input: 'что-то написано', lang: 'en', sort: 'popular' },
    { input: 'что-то написано', lang: 'en', sort: 'popular' },
    { input: 'что-то написано', lang: 'en', sort: 'popular' },
    { input: 'что-то написано', lang: 'en', sort: 'popular' },
    { input: 'что-то написано', lang: 'en', sort: 'popular' },
];
  return (
    <div className="wrapper">
      <ul className='history'>
        {history.map((item) => (
          <li>{item.input}</li>
        ))}
      </ul>
    </div>
  );
}

export default History;
