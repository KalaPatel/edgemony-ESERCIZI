import style from "./index.module.scss";
import { CgMenuHotdog } from "react-icons/cg";

const Navbar = ({ setMenuOpen }) => {
  const onClickMenuOpen = () => {
    setMenuOpen((prev) => !prev);
  };
  return (
    <div className={style.Navbar}>
      <div className={style.name_logoContainer}>
        <img
          className={style.logo_img}
          src="https://png2.cleanpng.com/sh/c22d2ffae665d0f9ae939f54e88c0d4d/L0KzQYm3UsA3N6p2fZH0aYP2gLBuTfNwa5x5edt1LXLodcO0gvFzfJZzfNd7LXnvfMb6lQJifJp0hp9sYYL3f7F1TfJieqVqhtZucj24cYjoU8I0aZVoSdhuNz62SIeBUMM1OmI6SakENUe5SYGCUME3NqFzf3==/kisspng-cocktail-beer-bartender-illustration-cartoon-bartender-5a7a323adc1fe7.3868034215179576909016.png"
          alt="logo"
        />
        <h4>KalaKala</h4>
      </div>
      <CgMenuHotdog className={style.hamburgerIcon} onClick={onClickMenuOpen} />
    </div>
  );
};

export default Navbar;
