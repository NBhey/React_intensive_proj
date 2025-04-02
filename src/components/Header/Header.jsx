import Button from "../Button/Button";
import "./Header.css";

function Header() {
  return (
    <>
      <header className="header">
        <div className="wrapper">

        <div className="header-wrapper">
          <div className="header__logo">
            <a href="/#">BookHome</a>
          </div>

          <nav className="header__navigation">
            <a href="#/"> История </a>
            <a href="#/"> Избранное </a>
            <div className="header__button">
              <Button type="signIn" />
              <Button type="signOut" />
            </div>
          </nav>
        </div>
        </div>
      </header>
    </>
  );
}

export default Header;

