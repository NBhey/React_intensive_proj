import React from "react";
import Card from "../Card/Card";
import "./Cards.css";

const Cards = ({ books, loading }) => {
  return (
    <section className="Cards">
      
      <ul className="Cards-wrapper">

        {books?.map((el) => (
          <Card key={el.id} card={el} />
        ))}
      </ul>
      {loading && <div className="loading">Загрузка...</div>}
    </section>
  );
};


export default Cards;
