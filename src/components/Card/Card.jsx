import "./Card.css"

const Card = ({card}) => {
    console.log(card);
    return (
      <li>
        <h3>{card.title}</h3>
        <h4>{card.authors[0]?.name || 'Anonymous'}</h4>
      </li>
    );
  };
    
  export default Card