import React, { useState } from 'react';
import CustomSelect from '../CustomSelect/CustomSelect.jsx'
import { resources } from '../../resources/resourses.js';
import './filter.css';

function Filter({onOpenFilter, onSelectLanguage, onSelectSort}) {
  return (
    <div className="container_filter">
      <div className="wrapper">
        <div className="filter">
          <CustomSelect labels={resources.filter.languages} onSelect={onSelectLanguage}/>
          <CustomSelect labels={resources.filter.popularity} onSelect={onSelectSort}/>
          <button className="filter_btn" onClick={onOpenFilter}>Применить</button>
        </div>
      </div>
    </div>
  );
}

export default Filter;
