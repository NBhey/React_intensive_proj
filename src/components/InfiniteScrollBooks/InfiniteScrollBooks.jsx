import React, { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";
import Cards from "../Cards/Cards";

const InfiniteScrollBooks = () => {
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

  const lastBookRef = useCallback(
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

  return (
    <div className="wrapper">
      <Cards books={books} loading={loading} />
      <div ref={lastBookRef} style={{ height: "20px" }} />
    </div>
  );
};

export default InfiniteScrollBooks;