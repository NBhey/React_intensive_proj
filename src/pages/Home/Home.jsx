import React from 'react'
import BlockSearch from '../../components/BlockSearch/BlockSearch'
import InfiniteScrollBooks from "../../components/InfiniteScrollBooks/InfiniteScrollBooks";
import { useDispatch } from 'react-redux';
import { addSearchHistory } from '../../store/actions/actionSearchHistory';

const Home = () => {    

  return (
    <> 
        <BlockSearch/>        
        <InfiniteScrollBooks />
    </>
  )
}

export default Home

