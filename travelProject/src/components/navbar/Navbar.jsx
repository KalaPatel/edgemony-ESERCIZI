import styles from "./index.module.scss";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <h1 className={styles.Name}>
        <Link to="/" className={styles.Name}>
          Name
        </Link>
      </h1>
      <ul className={styles.listItem}>
        <li>
          <Link to="/about" className={styles.link}>
            About
          </Link>
        </li>
        <li>
          <Link to="/activity" className={styles.link}>
            Activity
          </Link>
        </li>
        <li>
          <Link to="/city" className={styles.link}>
            City
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
