import React, { useEffect } from 'react';
import TittlePages from '../../components/TittlePages/TittlePages';
import BlockSearch from '../../components/BlockSearch/BlockSearch';
import InfiniteScrollBooks from '../../components/InfiniteScrollBooks/InfiniteScrollBooks';

const Home = ({ tittle }) => {
  return (
    <>
      <BlockSearch />
      <div className="wrapper">
        <TittlePages tittle={tittle} />
      </div>
      <InfiniteScrollBooks />
    </>
  );
};

export default Home;
