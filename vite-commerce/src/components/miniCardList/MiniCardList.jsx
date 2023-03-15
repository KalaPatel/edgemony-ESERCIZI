import "./index.css";
import { useState, useEffect } from "react";
import { GET } from "../../utils/http.js";
import MiniCard from "../miniCard";

const MiniCardList = ({ endpointValue }) => {
  const [miniCards, setMiniCards] = useState([]);

  useEffect(() => {
    GET("/products" + endpointValue + "?limit=60").then((data) =>
      setMiniCards(() => data.products)
    );
  }, [endpointValue]);

  return (
    <div className="App__miniCards">
      {miniCards.map((card) => (
        <MiniCard
          productData={card}
          imgSrc={card.thumbnail}
          imgAlt={card.title}
          key={card.id}
        />
      ))}
    </div>
  );
};

export default MiniCardList;
