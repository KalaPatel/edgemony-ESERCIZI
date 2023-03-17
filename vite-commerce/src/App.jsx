import { useState, useEffect } from "react";
import Hero from "./components/hero";
import Footer from "./components/footer/Footer";
import CardList from "./components/cardList";
import Navbar from "./components/navbar";
import "./App.css";
import MiniCardList from "./components/miniCardList/MiniCardList";

function App() {
  const [endpointValue, setEndpointValue] = useState("");
  const [cartProduct, setCartProduct] = useState([]);
  const [qtyValue, setQtyValue] = useState(1);

  return (
    <div className="App">
      <Navbar
        setEndpointValue={setEndpointValue}
        cartProduct={cartProduct}
        setCartProduct={setCartProduct}
        setQtyValue={setQtyValue}
        qtyValue={qtyValue}
      />
      <Hero />
      <MiniCardList endpointValue={endpointValue} />
      <CardList
        title="Technology"
        endpoint="/products?limit=10"
        idTarget="technologySection"
        setCartProduct={setCartProduct}
        qtyValue={qtyValue}
      />
      {/* <CardList
        title="Skincare"
        endpoint="/products?limit=10&skip=10"
        idTarget="selfCareSection"
        setCartProduct={setCartProduct}
      />
      <CardList
        title="Household Products"
        endpoint="/products?limit=10&skip=25"
        idTarget="householdSection"
        setCartProduct={setCartProduct}
      />
      <CardList
        title="Women"
        endpoint="/products?limit=15&skip=35"
        idTarget="womenSection"
        setCartProduct={setCartProduct}
      />
      <CardList
        title="Men"
        endpoint="/products?limit=10&skip=50"
        idTarget="menSection"
        setCartProduct={setCartProduct}
      /> */}
      <Footer />
    </div>
  );
}

export default App;
