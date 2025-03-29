import axios from "axios";
import React, { useState, useEffect } from "react";

import Card from "../Card/Card";
import "./Cards.css";

const Cards = () => {
  const [stateListBook, setStateList] = useState(null);
  let [currentPage, setCurrentPage] = useState("1");

  useEffect(() => {
    const url = `https://gutendex.com/books/?page=${currentPage}`;
    axios
      .get(url)
      .then((res) => {
        setStateList(res.data.results);
      })
      .catch((err) => {
        console.log("Ошибка запроса", err);
      });
  }, []);

  return (
    <section className="Cards">
      <ul className="Cards-wrapper">
        {stateListBook?.map((el, i) => {
          return <Card key={el.id} card={el} />;
        }) || "Загрузка..."}
      </ul>
    </section>
  );
};

export default Cards;
