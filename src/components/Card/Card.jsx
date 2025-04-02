import "./Card.css"
// ref={props.scrollRefferal}
const Card = ({card}) => {
    return (
      <li className="card_item" >
        <h3 className="card_title">{card.title}</h3>
        <h4>{card.authors[0]?.name || 'Anonymous'}</h4>
      </li>
    );
  };
    
export default Card