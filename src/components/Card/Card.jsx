import "./Card.css"
import {useDispatch, useSelector} from 'react-redux'
import { addFavoritesAction, removeFavoritesAction } from '../../store/Reducers/favoritesReducer'
import React, { useState } from "react";

const Card = ({card}) => {
  const [fav,setFav] = useState(false)
  const dispatch = useDispatch()
  const favorites = useSelector(state=>state.favorites.userFavorites)
  const displayAuthor = card.authors[0]?.name || 'Anonymous'

  const addToFavFunc = () =>{
    dispatch(addFavoritesAction({id: card.id, title: card.title, author: displayAuthor}))
    setFav(true)
    
  }

  // const removeFromFavFunc= () =>{
  //   dispatch(removeFavoritesAction(card.id))
  //   setFav(false)
  // }

  
    return (
      <li onClick={addToFavFunc}>
        <h3>{card.title}</h3>
        <h4>{displayAuthor}</h4>
      </li>
    );
  };
    
export default Card