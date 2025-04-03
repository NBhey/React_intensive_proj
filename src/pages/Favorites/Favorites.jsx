import React from 'react'
import {useSelector} from 'react-redux'
import Card from '../../components/Card/Card'


const Favorites = () => {
    const favorites = useSelector(state=>state.favorites.userFavorites)
    
  return (
    <section className='Cards Favorites'>
        <div className="wrapper">
            <ul className='Cards-wrapper'>
                {favorites.length > 0 ? favorites.map((element)=>{
                        return( <Card key={element.id} card={element}/> )
                        
                    }):'У вас ничего не добавлено'}    
            </ul> 
        </div>

    </section>
  )
}

export default Favorites