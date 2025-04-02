import React, { useState, useEffect } from 'react';
import { getBooks } from '../../servises/api/getBooks';

import Filter from '../filter/Filter'
import Suggestion from '../Suggestion/Suggestion';

import searchImg from '../../assets/images/search.svg';
import filterImg from '../../assets/images/filter.svg';

import { debounce } from '../../utils/debounce';

import './search.css';


function Search(props) {
  const [params, setParam] = useState({ search: '', lang: '', sort: '' }); //нужен редакс
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [inputValue, setInputValue] = useState(''); //мб реф использовать?
  const [suggestion, setSuggestion] = useState([]);
  const [OpenSuggestion, setOpenSuggestion] = useState(false);

  const onChangeInput = (e) => {
    setInputValue(e.target.value);
    setParam({ ...params, search: e.target.value });
  };

  const onSelectLanguage = (lang) => {
    setParam({ ...params, lang: lang });
  };
  const onSelectSort = (sort) => {
    setParam({ ...params, lang: sort });
  };
  const onOpenFilter = () => {
    setIsOpenFilter(!isOpenFilter);
  };

  const fetchSug = async (args) => {
    try {
      const res = await getBooks(args);
      const newRes = res.data.results.slice(0, 5);
      setSuggestion(newRes);
      setOpenSuggestion(true);
    } catch (error) {
        console.log(error);
        setSuggestion([]);
        setOpenSuggestion(false);
    }
  };
  const fetchSugDebounce=debounce(fetchSug, 3000, true);
  useEffect(() => {
    
   if(inputValue.length>2){
    fetchSugDebounce(params);
   }
    // const fetchSug = async () => {
    //   if (inputValue.length > 2) {
    //     try {
    //       const res = await axios.get(
    //         `https://gutendex.com/books?search=${inputValue.replace(/\s/g, '%20')}`,
    //       );
    //       const newRes = res.data.results.slice(0, 5);
    //       setSuggestion(newRes);
    //       setOpenSuggestion(true);
    //     } catch (error) {
    //       console.log(error);
    //       setSuggestion([]);
    //       setOpenSuggestion(false);
    //     }
    //   }
    // };
    // fetchSug();
  }, [inputValue]);

  return (
    <div className="wrapper">
      <div className="block_search">
        <div className="container-search">
          <input
            className="search"
            value={inputValue}
            onChange={(e) => onChangeInput(e)}
            type="text"
            placeholder="Введите текст для поиска"
          />
          <span className="search_btn" onClick={onOpenFilter}>
            <img src={filterImg} alt="filter" width="45px" />
          </span>
          <span className="search_btn">
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
  );
}

export default Search;
