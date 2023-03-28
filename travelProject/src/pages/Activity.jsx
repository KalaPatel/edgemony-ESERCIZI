// import styles from "../pages/scssPages/Activity.module.scss";
import Navbar from "../components/navbar";
import Hero from "../components/hero/Hero";
import Footer from "../components/footer";
import { Outlet } from "react-router-dom";

export default function Activity() {
  return (
    <>
      <Navbar />
      <Hero />
      <p>Attività bellissime</p>
      <p>incredibili</p>
      <Outlet />
      <Footer />
    </>
  );
}
