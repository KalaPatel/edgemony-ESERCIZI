// import styles from "../pages/scssPages/About.module.scss";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Hero from "../components/hero/Hero";
export default function City() {
  return (
    <>
      <Navbar />
      <Hero />
      <p>Città</p>
      <p>Tante città</p>
      <Outlet />
      <Footer />
    </>
  );
}
