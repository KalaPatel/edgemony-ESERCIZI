import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Hero from "./components/hero";
import ProductList from "./components/ProductList";
import Modal from "./components/modal";
// import Button from "./components/button";
import Gallery from "./components/gallery";
import { productsMock } from "./mocks/productMock";

function App() {
  const [isDarkMode, setDarkMode] = useState(false);
  const [isModalOn, setModalStatus] = useState(true);
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
        <ProductList productList={productsMock} />
      </main>
      <footer>
        <Footer />
      </footer>
      {isModalOn ? <Modal setModalStatus={setModalStatus} /> : null}
    </div>
  );
}

export default App;
