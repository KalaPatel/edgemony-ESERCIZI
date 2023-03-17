import "./index.css";
import ModalCart from "../modalCart";

const CartList = ({ cartProduct, setCartProduct, setQtyValue, qtyValue }) => {
  return (
    <div className="CartList">
      {cartProduct.map((element) => (
        <ModalCart
          cartData={element}
          key={element.id}
          setCartProduct={setCartProduct}
          setQtyValue={setQtyValue}
          qtyValue={qtyValue}
        />
      ))}
    </div>
  );
};

export default CartList;
