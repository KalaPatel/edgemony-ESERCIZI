import { useState } from "react";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import CategorySection from "./components/categorySection";
import Content from "./components/content";
import SingleDrinkModal from "./components/singleDrinkModal";
import "./App.scss";
function App() {
  const [category, setCategory] = useState("Cocktail");
  const [singleDrinkModalStatus, setsingleDrinkModalStatus] = useState({
    isVisible: false,
    data: {},
  });
  return (
    <div className="App">
      {singleDrinkModalStatus.isVisible ? (
        <SingleDrinkModal
          data={singleDrinkModalStatus.data}
          setsingleDrinkModalStatus={setsingleDrinkModalStatus}
        />
      ) : (
        <>
          <Navbar />
          <Hero />
          <CategorySection setCategory={setCategory} />
          <Content
            category={category}
            setsingleDrinkModalStatus={setsingleDrinkModalStatus}
          />
        </>
      )}
    </div>
  );
}

export default App;
