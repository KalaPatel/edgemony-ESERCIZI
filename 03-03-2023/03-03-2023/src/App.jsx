import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Hero from "./components/hero";
import ProductList from "./components/ProductList";
import Modal from "./components/modal";
import CardOverlay from "./components/cardOverlay";
import Gallery from "./components/gallery";

function App() {
  const [isDarkMode, setDarkMode] = useState(false);
  const [isModalOn, setModalStatus] = useState(true);
  const [cardModalStatus, setCardModalStatus] = useState(null);

  // const modalBtnOpen = () => {
  //   setCardModalStatus(true);
  // };
  return (
    <div className={`bodyApp ${isDarkMode && "darkMode"}`}>
      <div>
        <Header />
        <div className="screenMode">
          <code onClick={() => setDarkMode(false)}>☀️</code>
          <code onClick={() => setDarkMode(true)}>🌛</code>
        </div>
        <Hero heroTitle="Everything you want in just one click!" />
      </div>
      <main>
        <Gallery />
        {/* <Button text="caricamento prod" clickFunction={btnClick} /> */}
        <ProductList setCardModalStatus={setCardModalStatus} />
      </main>
      <footer>
        <Footer />
      </footer>
      {isModalOn ? <Modal setModalStatus={setModalStatus} /> : null}
      {cardModalStatus ? (
        <CardOverlay
          product={cardModalStatus}
          setCardModalStatus={setCardModalStatus}
        />
      ) : null}
    </div>
  );
}

export default App;
