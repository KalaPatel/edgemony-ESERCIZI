import { useState } from "react";
import "./index.css";

const ModalCart = ({ cartData, setCartProduct, setQtyValue, qtyValue }) => {
  const addItemBtnFunc = () => {
    setQtyValue((prev) => prev + 1);
    console.log(qtyValue);

    setCartProduct((prev) => [
      ...prev.filter((prev) => prev.id !== cartData.id),
      {
        id: cartData.id,
        title: cartData.title,
        description: cartData.description,
        price: cartData.price,
        thumbnail: cartData.thumbnail,
        qty: qtyValue + 1,
      },
    ]);
  };

  const deleteItemBtnFunc = () => {
    setQtyValue((prev) => prev - 1);

    if (qtyValue >= 1) {
      setCartProduct((prev) => [
        ...prev.filter((prev) => prev.id !== cartData.id),
        {
          id: cartData.id,
          title: cartData.title,
          description: cartData.description,
          price: cartData.price,
          thumbnail: cartData.thumbnail,
          qty: qtyValue,
        },
      ]);
    } else {
      setCartProduct((prev) => [
        ...prev.filter((prev) => prev.id !== cartData.id),
      ]);
    }
  };

  console.log(cartData);

  return (
    <div className="ModalCart">
      <div className="productCartImg">
        <img src={cartData.thumbnail} alt={cartData.title} />
      </div>

      <div className="productCartInfo">
        <h4>{cartData.title.slice(0, 15)}</h4>
        <p>$ {cartData.price}</p>
      </div>
      <div className="qtySection">
        <button className="lessBtn" onClick={deleteItemBtnFunc}>
          -
        </button>
        <p>{cartData.qty}</p>
        <button className="plusBtn" onClick={addItemBtnFunc}>
          +
        </button>
      </div>
    </div>
  );
};

export default ModalCart;
