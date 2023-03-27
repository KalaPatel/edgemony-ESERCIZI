import DrinkCard from "../drinkCard";
import { useEffect } from "react";
import { GET } from "../utils/http";
import style from "./index.module.scss";

const Content = ({
  setsingleDrinkModalStatus,
  setIngredientData,
  setCardData,
  list,
}) => {
  useEffect(() => {
    GET("search.php?f=d").then(({ drinks }) => setCardData(drinks));
  }, []);

  return (
    <div className={style.Content}>
      {list.map((drink, i) => (
        <DrinkCard
          key={drink.idDrink}
          data={{ ...drink, indexObj: i }}
          setsingleDrinkModalStatus={setsingleDrinkModalStatus}
          setIngredientData={setIngredientData}
        />
      ))}
    </div>
  );
};

export default Content;
