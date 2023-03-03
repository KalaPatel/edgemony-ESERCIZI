// import { useState } from "react";
import "./index.css";
import Button from "../button";

const CardProduct = ({ productData, setCardModalStatus }) => {
  const modalBtnOpen = () => {
    setCardModalStatus(productData);
  };
  return (
    <div className="cardProduct">
      <img src={productData.thumbnail} alt="Product" />

      <div className="info-container">
        <h4>{productData.title}</h4>
        {/* <p>{productData.description}</p> */}
        <div>
          <code>⭐ {productData.rating}</code>
          <p>{productData.price} £</p>
        </div>
        <Button
          styleType="btn"
          text="Disponibilità"
          clickFunction={modalBtnOpen}
        />
      </div>
    </div>
  );
};

export default CardProduct;
