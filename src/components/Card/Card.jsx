import "./Card.css"
import {useDispatch, useSelector} from 'react-redux'
import { addFavoritesAction, removeFavoritesAction } from '../../store/Reducers/favoritesReducer'
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogStateContext } from "../../Providers/LogState";


const Card = ({card}) => {
  const {isAuth} = useContext(LogStateContext)
  const dispatch = useDispatch()
  const favorites = useSelector(state=>state.favorites.userFavorites)
  const displayAuthor = card.authors?.[0]?.name || 'Anonymous'
  const [isLiked, setIsLiked] = useState();
  
  const navigate = useNavigate()

  const addToFavFunc = (e) =>{
    e.stopPropagation()
    dispatch(addFavoritesAction({id: card.id, title: card.title, authors: [{name:displayAuthor}]}))
    setIsLiked(!isLiked)
  }

  const removeFromFavFunc= (e) =>{
    e.stopPropagation()
    dispatch(removeFavoritesAction(card.id))
    setIsLiked(!isLiked)
  }

  let res = favorites.find((element)=>
    element.id === card.id
  )

    return (
      <li className="card_item" onClick={()=>{navigate(`/book/:${card.id}`)}}>
       {isAuth?<span className="favSpan" onClick={!res?addToFavFunc:removeFromFavFunc}>
          <svg
            width="42"
            height="37"
            viewBox="0 0 42 37"
            fill={ res? "#F8F4E7" : "none"}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M37.0698 4.91744C36.1413 3.99253 35.0389 3.25882 33.8255 2.75824C32.6121 2.25765 31.3116 2 29.9982 2C28.6848 2 27.3842 2.25765 26.1708 2.75824C24.9574 3.25882 23.855 3.99253 22.9265 4.91744L20.9995 6.83606L19.0725 4.91744C17.197 3.05005 14.6532 2.00097 12.0009 2.00097C9.34846 2.00097 6.80471 3.05005 4.92918 4.91744C3.05366 6.78482 2 9.31754 2 11.9584C2 14.5993 3.05366 17.132 4.92918 18.9994L6.85617 20.918L20.9995 35L35.1429 20.918L37.0698 18.9994C37.9988 18.0749 38.7357 16.9773 39.2385 15.7692C39.7412 14.561 40 13.2661 40 11.9584C40 10.6507 39.7412 9.3558 39.2385 8.14769C38.7357 6.93957 37.9988 5.84192 37.0698 4.91744Z"
              stroke="#F8F4E7"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span> : null} 
        <h3 className="card_title">{card.title}</h3>
        <h4>{displayAuthor}</h4>
      </li>
    );
  };
    
export default Card

