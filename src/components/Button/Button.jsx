import exitIcon from "./выход.svg"; // Импорт SVG
import signInIcon from "./вход.svg";

function Button({type}) {
    const buttonStyle = {
        border: "none",
        outline: "none",
    }
    const imgStyle = {
        width:"50px",
        height: "auto"
    }
    
    const iconSvg = type === "signOut" ? exitIcon : signInIcon;
    
  return <>
  <button style={buttonStyle} onClick={(e)=>{console.log(`Я ${type}`)}}>
    <img style={imgStyle} src={iconSvg} alt="" />
  </button>
  </>;
}

export default Button;
