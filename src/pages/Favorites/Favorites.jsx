import React from 'react'
import {useSelector} from 'react-redux'
import Cards from '../../components/Cards/Cards'
import TittlePages from '../../components/TittlePages/TittlePages'
const Favorites = ({tittle}) => {

const favorites = useSelector(state=>state.favorites.userFavorites)
  return (<>
     <div className="wrapper">
        <TittlePages tittle={tittle}/>
    </div>
    (<Cards books = {favorites} loading={false}/>&&favorites.length) || <div className="wrapper">
        <p>У вас ничего не добавлено</p>
    </div>
</>

  )
}

export default Favorites