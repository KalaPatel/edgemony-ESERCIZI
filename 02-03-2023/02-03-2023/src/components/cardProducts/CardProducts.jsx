import "./index.css";
import Button from "../button";

const CardProduct = ({ productData }) => {
  const btnStockCheck = () => {
    alert(`Ci sono ${productData.stock} prodotti disponibili`);
  };
  return (
    <div className="cardProduct">
      <img src={productData.thumbnail} alt="Product" />

      <div className="info-container">
        <h2>{productData.title}</h2>
        {/* <p>{productData.description}</p> */}
        <p>{productData.price} ¬£</p>
        <Button
          styleType="btn"
          text="Disponibilit√†"
          clickFunction={btnStockCheck}
        />
      </div>
    </div>
  );
};

export default CardProduct;
