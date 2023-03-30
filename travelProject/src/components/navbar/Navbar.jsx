import styles from "./index.module.scss";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <h1 className={styles.Name}>
        <Link to="/" className={styles.link}>
          KALAMUNDO
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
          <Link to="/attraction" className={styles.link}>
            Attractions
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
