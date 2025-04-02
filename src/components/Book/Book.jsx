import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './book.css';

function Book() {
  const { id } = useParams();
  const [book, setBook] = useState({});
  useEffect(() => {
    const fetchSug = async (args) => {
      try {
        const res = await axios.get(`https://gutendex.com/books?ids=${id}`);
        const newRes = res.data.results[0];
        console.log(newRes);
        setBook(newRes);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSug();
  }, [id]);
  return (
    <div className="wrapper">
      <div className="book">
        <div className="leftPage">
          <h2>Simple Sabotage Field Manual</h2>
          <div className="containerParameters">
            <ul className="parameters">
              <li>Автор(ы): </li>
              <li>Язык: </li>
              <li>Количество скачиваний: </li>
            </ul>
            <ul className="parameters of">
              <li>{book.authors?.[0]?.name || 'Неизвестно'}</li>
              <li>{book.languages?.[0] || 'Неизвестно'}</li>
              <li>{book.download_count || 'Неизвестно'}</li>
            </ul>
          </div>
        </div>
        <div className="rootOfBook"></div>
        <div className="rightPage">
          <h3>Краткое содержание</h3>
          <p>{book.summaries?.[0] || 'Краткое содержание отсутствует'}</p>
        </div>
      </div>
    </div>
  );
}

export default Book;
