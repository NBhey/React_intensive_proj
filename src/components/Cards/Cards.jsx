import axios from "axios";
import React, { useState, useEffect } from "react";

import Card from "../Card/Card";
import "./Cards.css"


const Cards = () => {
  const [stateListBook, setStateList] = useState(null);

  useEffect(() => {
    const url = "https://gutendex.com/books/?page=1";
    axios.get(url)
        .then((res) => {setStateList(res.data.results);})
        .catch((err)=>{console.log("Ошибка запроса", err)})
  }, []);


  return <ul className='Cards'>
  {stateListBook?.map((el, i)=>{
    return <Card key={el.id} card = {el}/>
  })  || 'Загрузка...'}
</ul>
  
};

export default Cards;
