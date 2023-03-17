import { useState } from "react";
import { BsCart2 } from "react-icons/bs";
import CartList from "../cartList";
import "./index.css";

const Navbar = ({
  setEndpointValue,
  cartProduct,
  setCartProduct,
  setQtyValue,
  qtyValue,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [cartOpen, setCartOpen] = useState(false);

  const localStorageCartProductList =
    window !== "undefined" &&
    JSON.parse(localStorage.getItem("cartProductList"));
  const onHandleInput = (e) => setInputValue(() => e.target.value);

  const openCartBtn = () => setCartOpen((prev) => !prev);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    setEndpointValue(() => `/category/${inputValue}`);
  };

  return (
    <div className="Navbar">
      <ul>
        <li>Home</li>
        <li>Contacts</li>
        <li>About us</li>
      </ul>
      <form onSubmit={onHandleSubmit}>
        <input
          value={inputValue}
          onChange={onHandleInput}
          type="text"
          placeholder="Cerca prodotto ..."
          required
        />
        <button className="submitBtn" type="submit">
          Cerca
        </button>
      </form>
      <BsCart2 className="cartIconMenu" onClick={openCartBtn} />
      <div className="productCartNum">
        {localStorageCartProductList
          ? localStorageCartProductList.length
          : cartProduct.length}
      </div>
      {cartOpen && (
        <CartList
          cartProduct={cartProduct}
          setCartProduct={setCartProduct}
          setQtyValue={setQtyValue}
          qtyValue={qtyValue}
        />
      )}
      {/* <ModalCart cartProduct={cartProduct} /> */}
    </div>
  );
};

export default Navbar;
