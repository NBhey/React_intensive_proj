import React, { useState } from 'react';
import CustomSelect from '../CustomSelect/CustomSelect.jsx';
import { resources } from '../../resources/resourses.js';
import './filter.css';

function Filter({ onOpenFilter, onSelectLanguage, onSelectSort }) {
  const [isOpenOne, setIsOpenOne] = useState(false);
  const [isOpenTwo, setIsOpenTwo] = useState(false);

  return (
    <div className="container_filter">
      <div className="wrapper">
        <div className="filter">
          <CustomSelect
            labels={resources.filter.languages}
            onSelect={onSelectLanguage}
            isOpen={isOpenOne}
            setIsOpen={setIsOpenOne}
            close={isOpenTwo}
          />
          <CustomSelect
            labels={resources.filter.popularity}
            onSelect={onSelectSort}
            isOpen={isOpenTwo}
            setIsOpen={setIsOpenTwo}
            close={isOpenOne}
          />
          <button className="filter_btn" onClick={onOpenFilter}>
            Применить
          </button>
        </div>
      </div>
    </div>
  );
}

export default Filter;
