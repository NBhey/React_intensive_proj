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
        <div className="header-wrapper">
          <div className="header__logo">
            <a href="/#">BookHome</a>
          </div>

          <nav className="header__navigation">
            <a href="#/"> История </a>
            <a href="#/"> Избранное </a>
            <div className="header__button">
              {!isAuth? <Button type="signIn"/>:<Button type="signOut" />}
             
              
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;

