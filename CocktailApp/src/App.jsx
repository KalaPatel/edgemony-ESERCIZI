import Hero from "./components/hero";
import Navbar from "./components/navbar";
import CategorySection from "./components/categorySection";
import Content from "./components/content";
import SingleDrinkModal from "./components/singleDrinkModal";
import HamburgerMenu from "./components/hamburgerMenu";
import ReservationModal from "./components/reservationModal";
import Popup from "./components/popup";
import Footer from "./components/footer";
import style from "./App.module.scss";
import { useState } from "react";
import { filteredByCategory } from "./components/utils/func";

function App() {
  const [cardData, setCardData] = useState([]);
  const [reservationData, setReservationData] = useState({
    isVisible: false,
    lastName: "",
    date: "",
    hour: "",
  });
  const [category, setCategory] = useState("");
  const [reservationModalOpen, setReservationModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [singleDrinkModalStatus, setsingleDrinkModalStatus] = useState({
    isVisible: false,
    data: {},
    objIndex: null,
  });
  const [heroStyle, setHeroStyle] = useState({
    text: "Save water, drink to KALAKALA instead!",
    img: "https://png2.cleanpng.com/sh/14ebe85950c2a18167aa754fdfef9801/L0KzQYq4UcA2N5Z2kpH9cnHxg8HokvVvfF5yh9xydHAwc7FqiCRicZ06fNU7OUC6R7K7gfU5PF8AUKk9OUK8SIK8V8MxO2M1TacBN0S4PsH1h5==/transparent-mojito-cocktail5dc29077a4ae84.9874929815730320556745.png",
  });

  const list = filteredByCategory(cardData, "strCategory", category);

  return (
    <div className={style.App}>
      {singleDrinkModalStatus.isVisible ? (
        <SingleDrinkModal
          counter={singleDrinkModalStatus.objIndex}
          data={singleDrinkModalStatus.data}
          filterData={list}
          setsingleDrinkModalStatus={setsingleDrinkModalStatus}
        />
      ) : (
        <>
          <Navbar setMenuOpen={setMenuOpen} />
          <Hero
            text={heroStyle.text}
            img={heroStyle.img}
            setReservationModalOpen={setReservationModalOpen}
          />
          <CategorySection
            setCategory={setCategory}
            setHeroStyle={setHeroStyle}
          />
          <Content
            setCardData={setCardData}
            list={list}
            setsingleDrinkModalStatus={setsingleDrinkModalStatus}
          />
          <Footer />
          {menuOpen ? (
            <HamburgerMenu styleType={"show"} />
          ) : (
            <HamburgerMenu styleType={"hide"} />
          )}
        </>
      )}

      {reservationModalOpen ? (
        <ReservationModal
          styleType="showModal"
          setReservationModalOpen={setReservationModalOpen}
          setReservationData={setReservationData}
        />
      ) : (
        <ReservationModal
          styleType="hideModal"
          setReservationModalOpen={setReservationModalOpen}
          setReservationData={setReservationData}
        />
      )}

      {reservationData.isVisible && (
        <Popup>
          <h3>
            Your reservation, under the name {reservationData.lastName} of the
            {` ${reservationData.date}`} at {reservationData.hour} has been
            confirmed
          </h3>
        </Popup>
      )}
    </div>
  );
}

export default App;
