import React from 'react'
import Cards from '../../components/Cards/Cards'
import BlockSearch from '../../components/BlockSearch/BlockSearch'
import InfiniteScrollBooks from "../../components/InfiniteScrollBooks/InfiniteScrollBooks";

const Home = () => {    
  return (
    <>  
        <BlockSearch/>        
        <InfiniteScrollBooks />
    </>
  )
}

export default Home

