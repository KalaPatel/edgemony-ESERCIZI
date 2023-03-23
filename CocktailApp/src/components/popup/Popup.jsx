import style from "./index.module.scss";

const Popup = ({ children }) => {
  return <div className={style.Popup}>{children}</div>;
};

export default Popup;
