import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Hero from "./components/hero";
import ProductList from "./components/ProductList";
import Button from "./components/button";
import Gallery from "./components/gallery";
import { productsMock } from "./mocks/productMock";

function App() {
  const btnClick = () => {
    alert("I prodotti sono stati caricati correttamente");
  };

  return (
    <div className="bodyApp">
      <div>
        <Header />
        <Hero heroTitle="Everything you want in just one click!" />
      </div>
      <main>
        <Gallery />
        <Button text="Carica prodotti" clickFunction={btnClick} />
        <ProductList productList={productsMock} />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
