import { useState } from "react";
import "./index.css";
import Button from "../button";

const CardOverlay = ({ product, setCardModalStatus }) => {
  const [count, setCount] = useState(0);
  return (
    <div className="modal cardModal">
      <div className="overlay" onClick={() => setCardModalStatus(null)}></div>
      <div className="overlay_Card">
        <div className="imgBox">
          <img src={product.images[count]} alt="" />
          <div className="buttonContainer">
            <Button
              styleType={`modalCardBtn`}
              text="<"
              clickFunction={() =>
                count === 0 ? setCount(count) : setCount(count - 1)
              }
            />
            <Button
              styleType={"modalCardBtn"}
              text=">"
              clickFunction={() =>
                count === product.images.length - 1
                  ? setCount(count)
                  : setCount(count + 1)
              }
            />
          </div>
        </div>

        <p>
          <strong>Descrizione:</strong>
        </p>
        <p>{product.description}</p>
        <p>
          <strong>Disponibilità</strong>: {product.stock}
        </p>
      </div>
    </div>
  );
};

export default CardOverlay;
