import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { removeFavoritesAction } from '../../store/Reducers/favoritesReducer'

const Favorites = () => {
    const dispatch = useDispatch()
    const favorites = useSelector(state=>state.favorites.userFavorites)
       
    
    
  return (
   <ul>
       {favorites.length > 0 ? favorites.map((element, index)=>{
            return( <li onClick={(e)=>{
                dispatch(removeFavoritesAction(element.id))
            }}>{element.title}</li>)
        }):'У вас ничего не добавлено'}    
   </ul> 
  )
}

export default Favorites