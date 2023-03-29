// import styles from "../pages/scssPages/About.module.scss";
import { Outlet } from "react-router-dom";

export default function City() {
  return (
    <>
      <p>Città</p>
      <p>Tante città</p>
      <Outlet />
    </>
  );
}
