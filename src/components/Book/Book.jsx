import React from 'react';

import './book.css';

function Book({book}) {

  return (
    <div className="wrapper">
      <div className="book">
        <div className="leftPage">
          <h2>{book?.title}</h2>
          <div className="containerParameters">
            <ul className="parameters">
              <li>Автор(ы): </li>
              <li>Язык: </li>
              <li>Количество скачиваний: </li>
            </ul>
            <ul className="parameters of">
              <li>{book?.authors?.[0]?.name || 'Неизвестно'}</li>
              <li>{book?.languages?.[0] || 'Неизвестно'}</li>
              <li>{book?.download_count || 'Неизвестно'}</li>
            </ul>
          </div>
        </div>
        <div className="rootOfBook"></div>
        <div className="rightPage">
          <h3>Краткое содержание</h3>
          <p>{book?.summaries?.[0] || 'Краткое содержание отсутствует'}</p>
        </div>
      </div>
    </div>
  );
}

export default Book;
