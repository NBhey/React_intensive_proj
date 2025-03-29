import React, { useContext } from 'react'
import '../../App.css'
import './Header.css'
import { useNavigate } from 'react-router-dom'
import { LogStateContext } from '../../Providers/LogState'
import { NavLink } from 'react-router-dom'



const Header = (props) => {
    const navigate = useNavigate()
    const {isAuth, logout} = useContext(LogStateContext)
  return (
    <header className='header'>
        <div className='container'>
          <NavLink exact to='/'>
            <p style={{color: "white"}}>
                Book<span style={{color : "#846545"}}>Home</span>
            </p>
          </NavLink>
          
          <div className='leftSide'>
            <span>
              История
            </span>
            <span>
             Избранное
            </span>
            <button className= {isAuth?'logged':'notAuth'} onClick={()=>{
                if(isAuth){
                  navigate('/')
                  logout()
                }else{
                  navigate('/SignInPage')
                }
                
            }}>
              
                <svg xmlns="http://www.w3.org/2000/svg" width="57" height="55" viewBox="0 0 57 55" fill="none">
                  <path d="M38 3H48.8333C50.2699 3 51.6477 3.57068 52.6635 4.5865C53.6793 5.60233 54.25 6.98008 54.25 8.41667V46.3333C54.25 47.7699 53.6793 49.1477 52.6635 50.1635C51.6477 51.1793 50.2699 51.75 48.8333 51.75H38" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M35.5 27H3" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M24 40.0833L37.5417 26.5417L24 13" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>    
            </button>
          </div>
          
        </div>
       
    </header>
  )
}

export default Header