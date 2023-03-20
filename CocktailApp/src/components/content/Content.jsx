import DrinkCard from "../drinkCard";
import { useEffect, useState } from "react";
import { GET } from "../utils/http";
import { filteredByCategory } from "../utils/func";
import "./index.scss";

const Content = ({ category }) => {
  const [cardData, setCardData] = useState([]);
  useEffect(() => {
    GET("search.php?f=c").then(({ drinks }) => setCardData(drinks));
  }, []);
  const list = filteredByCategory(cardData, "strCategory", category);

  return (
    <div className="Content">
      {list.map((drink) => (
        <DrinkCard data={drink} key={drink.id} />
      ))}
    </div>
  );
};

export default Content;
