import axios from "axios";
import React, { useState, useEffect, useRef, useCallback, useContext } from "react";
import { LogStateContext } from '../../Providers/LogState'

import Card from "../Card/Card";
import "./Cards.css";

const Cards = () => {
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    if (!hasMore) return;

    const fetchBooks = async () => {
      setLoading(true);

      try {
        const url = `https://gutendex.com/books/?page=${page}`;
        const res = await axios.get(url);

        setBooks((prevBooks) => [...prevBooks, ...res.data.results]);
        setHasMore(res.data.next !== null);
      } catch (err) {
        console.log("Ошибка запроса", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, [page, hasMore]);

  const observerRef = useRef();

  const bookRef = useCallback(
    (element) => {
      if (loading) return;
      if (observerRef.current) observerRef.current.disconnect();
      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (element) observerRef.current.observe(element);
    },
    [loading, hasMore]
  );

    const user = JSON.parse(localStorage.getItem('user'))
    const {isAuth} = useContext(LogStateContext)
    let headerPhrase = null
    if (!isAuth){
        headerPhrase = <h1>Наша коллекция книг очень большая. Присоединяйся к нам!</h1>
    }else{
        headerPhrase = (user && isAuth)&& <h1>{user.name}, Привет!</h1>
    }


  return (
    <section className="Cards">
      {headerPhrase}
      <ul className="Cards-wrapper">
        
        {books?.map((el, index) => {
          if (books.length === index + 1) {
            
            return (<div key={el.id + Math.random()} ref={bookRef}> 
              <Card card={el} />
            </div>)
          }
          return <Card key={el.id + Math.random()} card={el} />;
        }) } 
      </ul>
      {loading && <div className="loading">Загрузка...</div>}
    </section>
  );
};

export default Cards;
