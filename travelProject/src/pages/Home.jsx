import styles from "./scssPages/Home.module.scss";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import Hero from "../components/hero/Hero";
import Footer from "../components/footer";

function Home() {
  return (
    <div className={styles.Home}>
      <Navbar />
      <Hero />
      <Link to="/city/Roma">
        <div className={styles.cityCard}>
          <span>Roma</span>
        </div>
      </Link>
      <Link to="/city/Roma">
        <div className={styles.actvityCard}>
          <span>SightSeeing</span>
        </div>
      </Link>
      <Footer />
    </div>
  );
}

export default Home;
