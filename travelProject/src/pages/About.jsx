import Navbar from "../components/navbar";
import Footer from "../components/footer";
import styles from "../pages/scssPages/About.module.scss";
import Hero from "../components/hero/Hero";

export default function About() {
  return (
    <div className={styles.About}>
      <Navbar />
      <Hero />
      <p>About</p>
      <Footer />
    </div>
  );
}
