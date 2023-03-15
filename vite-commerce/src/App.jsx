import { useState, useEffect } from "react";
import Hero from "./components/hero";
import Footer from "./components/footer/Footer";
import CardList from "./components/cardList";
import Navbar from "./components/navbar";
import "./App.css";
import MiniCardList from "./components/miniCardList/MiniCardList";

function App() {
  const [endpointValue, setEndpointValue] = useState("");

  return (
    <div className="App">
      <Navbar setEndpointValue={setEndpointValue} />
      <Hero />
      <MiniCardList endpointValue={endpointValue} />
      <CardList
        title="Technology"
        endpoint="/products?limit=10"
        idTarget="technologySection"
      />
      <CardList
        title="Skincare"
        endpoint="/products?limit=10&skip=10"
        idTarget="selfCareSection"
      />
      {/*    <CardList
        title="Household Products"
        endpoint="/products?limit=10&skip=25"
        idTarget="householdSection"
      />
   <CardList
        title="Women"
        endpoint="/products?limit=15&skip=35"
        idTarget="womenSection"
      />
      <CardList
        title="Men"
        endpoint="/products?limit=10&skip=50"
        idTarget="menSection"
      /> */}
      <Footer />
    </div>
  );
}

export default App;
