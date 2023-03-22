import { useState } from "react";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import CategorySection from "./components/categorySection";
import Content from "./components/content";
import SingleDrinkModal from "./components/singleDrinkModal";
import HamburgerMenu from "./components/hamburgerMenu";
import Footer from "./components/footer";
import style from "./App.module.scss";

function App() {
  const [cardData, setCardData] = useState([]);
  const [category, setCategory] = useState("");
  const [singleDrinkModalStatus, setsingleDrinkModalStatus] = useState({
    isVisible: false,
    data: {},
  });
  const [menuOpen, setMenuOpen] = useState(false);

  const [heroStyle, setHeroStyle] = useState({
    text: "Save water, drink to KALAKALA instead!",
    img: "https://png2.cleanpng.com/sh/14ebe85950c2a18167aa754fdfef9801/L0KzQYq4UcA2N5Z2kpH9cnHxg8HokvVvfF5yh9xydHAwc7FqiCRicZ06fNU7OUC6R7K7gfU5PF8AUKk9OUK8SIK8V8MxO2M1TacBN0S4PsH1h5==/transparent-mojito-cocktail5dc29077a4ae84.9874929815730320556745.png",
  });

  return (
    <div className={style.App}>
      {singleDrinkModalStatus.isVisible ? (
        <SingleDrinkModal
          data={singleDrinkModalStatus.data}
          setsingleDrinkModalStatus={setsingleDrinkModalStatus}
        />
      ) : (
        <>
          <Navbar setMenuOpen={setMenuOpen} />
          <Hero text={heroStyle.text} img={heroStyle.img} />
          <CategorySection
            setCategory={setCategory}
            setHeroStyle={setHeroStyle}
          />
          <Content
            category={category}
            setCardData={setCardData}
            cardData={cardData}
            setsingleDrinkModalStatus={setsingleDrinkModalStatus}
          />
          <Footer />
          {menuOpen && <HamburgerMenu styleType={"show"} />}
        </>
      )}
    </div>
  );
}

export default App;
