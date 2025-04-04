import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import TittlePages from '../../components/TittlePages/TittlePages';

import { setSearchObject } from '../../store/actions/actionsSearch';

import './history.css';

function History({ tittle }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchHistory = useSelector((state) => state.searchHistory.searchHistory);

  useEffect(() => {
    localStorage.setItem('searchParams', JSON.stringify(searchHistory));
  }, [searchHistory]);

  const navToSearch = (item) => {
    dispatch(setSearchObject(item));
    navigate('/search');
  };

  return (
    <div className="wrapper">
      <TittlePages tittle={tittle} />
      <ul className="history">
        {searchHistory.map((item) => (
          <li key={item.search} onClick={() => navToSearch(item)}>{item.search}</li> //вынести в отдельный блок
        ))}
      </ul>
    </div>
  );
}

export default History;
