import React, {useContext} from 'react'
import { LogStateContext } from '../../Providers/LogState'
import Cards from '../../components/Cards/Cards'
import BlockSearch from '../../components/BlockSearch/BlockSearch'
import Favorites from '../Favorites/Favorites'

const Home = () => {    
    const user = JSON.parse(localStorage.getItem('user'))
    const {isAuth} = useContext(LogStateContext)
    let headerPhrase = null
    if (!isAuth){
        headerPhrase = <h1>Наша коллекция книг очень большая. Присоединяйся к нам!</h1>
    }else{
        headerPhrase = (user && isAuth)&& <h1>{user.name}, Привет!</h1>
    }

  return (
    <>
        
        <BlockSearch/>
        {headerPhrase}
        <Favorites/>
        <Cards/> 
    </>
  )
}

export default Home