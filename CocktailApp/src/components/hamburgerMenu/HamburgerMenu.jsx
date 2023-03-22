import style from "./index.module.scss";

const HamburgerMenu = ({ styleType }) => {
  return (
    <div className={`${style.HamburgerMenu} ${style[styleType]}`}>
      <ul>
        <li>Home</li>
        <li>Menu</li>
        <li>About us</li>
      </ul>
    </div>
  );
};

export default HamburgerMenu;
