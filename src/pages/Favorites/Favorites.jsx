import React from 'react'
import {useSelector} from 'react-redux'
import Cards from '../../components/Cards/Cards'


const Favorites = () => {
    const favorites = useSelector(state=>state.favorites.userFavorites)

  return (
    (<Cards books = {favorites} loading={false}/>&&favorites.length) || <div className="wrapper">
        <p>У вас ничего не добавлено</p>
    </div>
  )
}

export default Favorites