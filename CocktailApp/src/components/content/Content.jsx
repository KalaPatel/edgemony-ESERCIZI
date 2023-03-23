import DrinkCard from "../drinkCard";
import { useEffect, useState } from "react";
import { GET } from "../utils/http";
// import { filteredByCategory } from "../utils/func";
import style from "./index.module.scss";

const Content = ({
  cardData,
  category,
  setsingleDrinkModalStatus,
  setIngredientData,
  setCardData,
  list,
}) => {
  useEffect(() => {
    GET("search.php?f=d").then(({ drinks }) => setCardData(drinks));
  }, []);

  // const list = filteredByCategory(cardData, "strCategory", category);
  // setCardData((prev) => ({
  //   ...prev,
  //   filteredArray: list,
  // }));

  return (
    <div className={style.Content}>
      {list.map((drink, i) => (
        <DrinkCard
          data={{ ...drink, indexObj: i }}
          key={drink.id}
          setsingleDrinkModalStatus={setsingleDrinkModalStatus}
          setIngredientData={setIngredientData}
        />
      ))}
    </div>
  );
};

export default Content;
