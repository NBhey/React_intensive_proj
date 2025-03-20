import Button from "../Button/Button";
import './Header.css'
function Header() {
  const inlineStyles = {
    backgroundColor: "lightblue",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    fontSize: "24px",
    color: "darkblue",
    maxWidth: "100px",
  };

  return (
    <>
      <header className="header-container">
        <nav className="header__navigation">
          <img
            src="https://avatars.mds.yandex.net/i?id=202ec70e420d3c02679499032d2e0b86_l-4600536-images-thumbs&n=13"
            style={inlineStyles}
            alt="logo"
          />
          <div className="header__button">
            <Button type='signUp'/>
            <Button type='signIn'/>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
