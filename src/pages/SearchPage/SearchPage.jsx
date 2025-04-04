import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Cards from '../../components/Cards/Cards';
import BlockSearch from '../../components/BlockSearch/BlockSearch';
import TittlePages from '../../components/TittlePages/TittlePages';

import { getBooks } from '../../servises/api/getBooks';

function SearchPage({ tittle }) { //сохранить состояние при перезагрузке
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const searchBook = useSelector((state) => state.search.searchObject);

  const fetchSug = async (args) => {
    try {
      setLoading(true);
      const res = await getBooks(args);
      const newRes = res.data.results.slice(0, 5);
      setBooks(newRes);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setBooks([]);
    }
  };

  useEffect(() => {
    if (searchBook.search.length > 2) {
      fetchSug(searchBook);
    }
  }, [searchBook]);

  return (
    <>
      <BlockSearch />
      <div className="wrapper">
        <TittlePages tittle={tittle} addTittle={searchBook.search} />
        <Cards books={books} loading={loading} />
      </div>
    </>
  );
}

export default SearchPage;
