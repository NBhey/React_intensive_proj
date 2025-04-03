import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { removeFavoritesAction } from '../../store/Reducers/favoritesReducer';
import TittlePages from '../../components/TittlePages/TittlePages'

const Favorites = ({tittle}) => {
    const dispatch = useDispatch()
    const favorites = useSelector(state=>state.favorites.userFavorites)
       
    
    
  return (
    <>
    <div className="wrapper">
        <TittlePages tittle={tittle}/>
    </div>
    <section className='Cards Favorites'>
        <ul className='Cards-wrapper'>
            {favorites.length > 0 ? favorites.map((element, index)=>{
                    return( <li onClick={(e)=>{
                        dispatch(removeFavoritesAction(element.id))
                    }}>
                        <h3>{element.title}</h3>
                        <h4>{element.author}</h4>
                    </li>)
                }):'У вас ничего не добавлено'}    
        </ul> 

    </section>
    </>
  )
}

export default Favorites