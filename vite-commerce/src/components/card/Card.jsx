import { shortDescription } from "../../utils/func";
import { BsCart2 } from "react-icons/bs";
import "./index.css";

const Card = ({ productData, setCartProduct }) => {
  const onAddCartBtn = () => {
    const localStorageCartProduct = JSON.parse(
      localStorage.getItem("cartProductList") || "[]"
    );

    setCartProduct((prev) => [...prev, productData]);

    localStorage.setItem(
      "cartProductList",
      JSON.stringify([...localStorageCartProduct, productData])
    );
  };
  return (
    <div className="Card">
      <img
        className="Card__image"
        src={productData.thumbnail}
        alt={productData.title}
      />
      <div className="Card__text">
        <h3 className="Card__text--title">{productData.title}</h3>
        <p className="Card__text--desc">
          {shortDescription(productData.description)}
        </p>
        <p className="Card__text--cat">{productData.category}</p>
        <div>
          <BsCart2 className="cart-Icon" onClick={onAddCartBtn} />
          {/* <span className="contentShow">Add</span> */}
          <p className="Card__text--price">$ {productData.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
