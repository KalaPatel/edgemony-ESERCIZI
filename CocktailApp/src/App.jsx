import { useState } from "react";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import CategorySection from "./components/categorySection";
import Content from "./components/content";
import "./App.scss";
function App() {
  const [category, setCategory] = useState("Cocktail");
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <CategorySection setCategory={setCategory} />
      <Content category={category} />
    </div>
  );
}

export default App;
