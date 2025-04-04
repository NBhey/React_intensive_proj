import React, { useState, useEffect } from 'react';
import { getBooks } from '../../servises/api/getBooks';

import Filter from '../filter/Filter';
import Suggestion from '../Suggestion/Suggestion';

import searchImg from '../../assets/images/search.svg';
import filterImg from '../../assets/images/filter.svg';

// import { debounce } from '../../utils/debounce';
import debounce from 'lodash.debounce';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchObject, clearSearchObject } from '../../store/actions/actionsSearch';
import { addSearchHistory } from '../../store/actions/actionSearchHistory';
import './search.css';
import { useNavigate } from 'react-router-dom';

function Search() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchHistory=useSelector((state)=>state.searchHistory.searchHistory);

  const searchObject = useSelector((state) => state.search.searchObject.search);

  const [params, setParam] = useState({ search: '', lang: '', sort: '' }); //нужен редакс
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [OpenSuggestion, setOpenSuggestion] = useState(false);
  const [inputValue, setInputValue] = useState(''); //мб реф использовать?
  const [suggestion, setSuggestion] = useState([]);

  const onClickSearch = () => {
    navigate('/search');
    setOpenSuggestion(false);
    dispatch(setSearchObject(params));
    dispatch(addSearchHistory(params));
    
  };

  const onChangeInput = (e) => {
    setInputValue(e.target.value);
    setParam({ ...params, search: e.target.value });
  };

  const onSearchKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onClickSearch();
    }
  };

  const onSelectLanguage = (lang) => {
    setParam({ ...params, lang: lang });
  };
  const onSelectSort = (sort) => {
    setParam({ ...params, sort: sort });
  }; //ее можно убрать

  const onOpenFilter = () => {
    setIsOpenFilter(!isOpenFilter);
  };

  const fetchSug = async (args) => {
    try {
      const res = await getBooks(args);
      const newRes = res.data.results.slice(0, 5);
      if(newRes.length>0){
        console.log('xnj', newRes.length)
        setSuggestion(newRes);
        setOpenSuggestion(true);
      }
    } catch (error) {
      console.log(error);
      setSuggestion([]);
      setOpenSuggestion(false);
    }
  };
  
  useEffect(() => {
    if(inputValue.length > 2){
      fetchSug(params);
    }
  }, [inputValue]);

  return (
    <>
      <div className="wrapper">
        <div className="block_search">
          <div className={OpenSuggestion ? 'container-search withSug' : 'container-search'}>
            <input
              className="search"
              value={inputValue}
              onChange={(e) => onChangeInput(e)}
              onKeyDown={onSearchKeyDown}
              type="text"
              placeholder="Введите текст для поиска"
            />
            <span className="search_btn" onClick={onOpenFilter}>
              <img src={filterImg} alt="filter" width="45px" />
            </span>
            <span className="search_btn" onClick={onClickSearch}>
              <img src={searchImg} alt="search" width="25px" />
            </span>
          </div>
          {isOpenFilter && (
            <Filter
              onOpenFilter={onOpenFilter}
              onSelectLanguage={onSelectLanguage}
              onSelectSort={onSelectSort}
            />
          )}
        </div>
        {OpenSuggestion && <Suggestion suggestions={suggestion} />}
      </div>
    </>
  );
}

export default Search;
