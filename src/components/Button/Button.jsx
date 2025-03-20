import signUpIcon from "./login-2-svgrepo-com.svg"; // Импорт SVG
import signInIcon from "./login-svgrepo-com.svg";

function Button({type, onClick}) {
    const buttonStyle = {
        border: "none",
        outline: "none",
    }
    const imgStyle = {
        width:"50px",
        height: "auto"
    }
    
    const iconSvg = type === "signUp" ? signUpIcon : signInIcon;
    
  return <>
  <button style={buttonStyle}>
    <img style={imgStyle} src={iconSvg} alt="" />
  </button>
  </>;
}

export default Button;
