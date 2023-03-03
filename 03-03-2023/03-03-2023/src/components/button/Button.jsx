import "./index.css";
const Button = ({ styleType, text, clickFunction }) => {
  return (
    <button className={styleType} onClick={clickFunction}>
      {text}
    </button>
  );
};

export default Button;
