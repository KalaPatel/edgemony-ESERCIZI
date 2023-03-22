import DrinkCard from "../drinkCard";
import { useEffect, useState } from "react";
import { GET } from "../utils/http";
import { filteredByCategory } from "../utils/func";
import style from "./index.module.scss";

const Content = ({
  category,
  setsingleDrinkModalStatus,
  setIngredientData,
  setCardData,
  cardData,
}) => {
  useEffect(() => {
    GET("search.php?f=d").then(({ drinks }) => setCardData(drinks));
  }, []);

  const list = filteredByCategory(cardData, "strCategory", category);

  return (
    <div className={style.Content}>
      {list.map((drink) => (
        <DrinkCard
          data={drink}
          key={drink.id}
          setsingleDrinkModalStatus={setsingleDrinkModalStatus}
          setIngredientData={setIngredientData}
        />
      ))}
    </div>
  );
};

export default Content;
