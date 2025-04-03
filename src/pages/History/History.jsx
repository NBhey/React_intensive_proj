import React, { useEffect, useState } from 'react';
import './history.css';
import { useDispatch, useSelector } from 'react-redux';
import TittlePages from '../../components/TittlePages/TittlePages';
import { Link, useNavigate } from 'react-router-dom';
import { setSearchObject } from '../../store/actions/actionsSearch';

function History({tittle}) {
 
  const [searchHistoryArr, setSearchHistoryArr]=useState([]);
  const dispatch=useDispatch();
  const searchHistory=useSelector((state)=>state.searchHistory.searchHistory);
  
  const navigate=useNavigate();

  useEffect(()=>{
    (localStorage.setItem('searchParams', JSON.stringify(searchHistory)));

    
  },[searchHistory]);

  const navToSearch=(item)=>{
    dispatch(setSearchObject(item));
    navigate('/search');
  }
  console.log(searchHistory);
  return (
    
    <div className="wrapper">
      <TittlePages tittle={tittle}/>
      <ul className='history'>
        {searchHistory.map((item) => (
          
            <li onClick={()=>navToSearch(item)}>{item.search}</li>
          
        ))}
      </ul>
    </div>
  );
}

export default History;
