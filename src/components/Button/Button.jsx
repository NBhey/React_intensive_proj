const signInIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="57"
    height="55"
    viewBox="0 0 57 55"
    fill="none"
  >
    <path
      d="M38 3H48.8333C50.2699 3 51.6477 3.57068 52.6635 4.5865C53.6793 5.60233 54.25 6.98008 54.25 8.41667V46.3333C54.25 47.7699 53.6793 49.1477 52.6635 50.1635C51.6477 51.1793 50.2699 51.75 48.8333 51.75H38"
      stroke="white"
      stroke-width="5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M35.5 27H3"
      stroke="white"
      stroke-width="5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M24 40.0833L37.5417 26.5417L24 13"
      stroke="white"
      stroke-width="5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
const exitIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="54"
    height="54"
    viewBox="0 0 54 54"
    fill="none"
  >
    <path
      d="M19 51H8.33333C6.91885 51 5.56229 50.4381 4.5621 49.4379C3.5619 48.4377 3 47.0812 3 45.6667V8.33333C3 6.91885 3.5619 5.56229 4.5621 4.5621C5.56229 3.5619 6.91885 3 8.33333 3H19"
      stroke="white"
      stroke-width="5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M38 40.6667L51.3333 27.3333L38 14"
      stroke="white"
      stroke-width="5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M49 27H17"
      stroke="white"
      stroke-width="5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

function Button({ type }) {
  const buttonStyle = {
    backgroundColor: "transparent",
    border: "none",
    outline: "none",
    cursor:"pointer"
  };

  const iconSvg = type === "signOut" ? exitIcon : signInIcon;

  return (
    <button
      style={buttonStyle}
      onClick={(e) => {
        console.log(`Я ${type}`);
      }}
    >
      {iconSvg}
    </button>
  );
}

export default Button;
