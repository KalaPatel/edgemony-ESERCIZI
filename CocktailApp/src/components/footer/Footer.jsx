import style from "./index.module.scss";
import {
  SlSocialGithub,
  SlSocialInstagram,
  SlSocialFacebook,
} from "react-icons/sl";
const Footer = () => {
  return (
    <div className={style.Footer}>
      <div className={style.iconsWrapper}>
        <SlSocialGithub className={style.icons} />
        <SlSocialInstagram className={style.icons} />
        <SlSocialFacebook className={style.icons} />
      </div>

      <p>
        <i>PNG by</i>
        <a className={style.link} href="https://it.cleanpng.com/">
          Cleanpng
        </a>
      </p>
    </div>
  );
};

export default Footer;
