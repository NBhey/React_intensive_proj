import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { removeFavoritesAction } from '../../store/Reducers/favoritesReducer';
import TittlePages from '../../components/TittlePages/TittlePages'
import Card from '../../components/Card/Card'
const Favorites = ({tittle}) => {
    const dispatch = useDispatch()

    const favorites = useSelector(state=>state.favorites.userFavorites)
    
  return (
    <>
    <div className="wrapper">
        <TittlePages tittle={tittle}/>
    </div>
    <section className='Cards Favorites'>
        <div className="wrapper">
            <ul className='Cards-wrapper'>
                {favorites.length > 0 ? favorites.map((element)=>{
                        return( <Card key={element.id} card={element}/> )
                        
                    }):'У вас ничего не добавлено'}    
            </ul> 
        </div>

    </section>
    </>
  )
}

export default Favorites