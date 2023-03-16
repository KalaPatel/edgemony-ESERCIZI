import "./index.css";
import ModalCart from "../modalCart";

const CartList = ({ cartProduct }) => {
  return (
    <div className="CartList">
      {cartProduct.map((element) => (
        <ModalCart cartData={element} key={element.id} />
      ))}
    </div>
  );
};

export default CartList;
