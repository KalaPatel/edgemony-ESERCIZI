import "./index.css";
const Button = ({ text, clickFunction }) => {
  return (
    <button className="btn" onClick={clickFunction}>
      {text}
    </button>
  );
};

export default Button;
