import React, { useState } from 'react';
import { useEffect } from 'react';

import { useSelector } from 'react-redux';

import Cards from '../../components/Cards/Cards';
import { getBooks } from '../../servises/api/getBooks';
import BlockSearch from '../../components/BlockSearch/BlockSearch';
import TittlePages from '../../components/TittlePages/TittlePages';




function SearchPage({tittle}) {
    const[books, setBooks]=useState([]);
    const searchBook=useSelector((state)=>state.search.searchObject)
    useEffect(()=>{
          const fetchSug = async (args) => {
            try {
              const res = await getBooks(args);
              const newRes = res.data.results.slice(0, 5);
              setBooks(newRes);
              
            } catch (error) {
                console.log(error);
                setBooks([]);
                
            }
          };

          fetchSug(searchBook);
    },[searchBook]);



    return (
        <>
          <BlockSearch/>
          <div className="wrapper">
          <TittlePages tittle={tittle} addTittle={searchBook.search}/>
          <Cards books={books}/>
          </div>
    
        </>
    );
}

export default SearchPage;