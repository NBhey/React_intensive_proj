import React, { useContext } from "react";
import Button from "../Button/Button";
import "./Header.css";
import { LogStateContext } from "../../Providers/LogState";
import { NavLink, useNavigate } from "react-router-dom";


 

function Header() {
  const {isAuth} = useContext(LogStateContext)
  return (
    <>
      <header className="header">
        <div className="wrapper">

        <div className="header-wrapper">
          <div className="header__logo">
            <NavLink to='/'>BookHome</NavLink>
          </div>

          <nav className="header__navigation">
            <NavLink to='/History'>История</NavLink>
            <NavLink to={!isAuth?'/SignInPage':'/Favorites'}>Избранное</NavLink> 
            <div className="header__button">
              {!isAuth? <Button type="signIn"/>:<Button type="signOut" />}
             
              
            </div>
          </nav>
        </div>
        </div>
      </header>
    </>
  );
}

export default Header;

