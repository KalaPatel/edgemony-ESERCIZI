import { shortDescription } from "../../utils/func";
import { BsCart2 } from "react-icons/bs";
import "./index.css";

const Card = ({ productData, setCartProduct, qtyValue }) => {
  const onAddCartBtn = () => {
    // const localStorageCartProduct = JSON.parse(
    //   localStorage.getItem("cartProductList") || "[]"
    // );

    setCartProduct((prev) => [
      ...prev,
      {
        id: productData.id,
        title: productData.title,
        description: productData.description,
        price: productData.price,
        thumbnail: productData.thumbnail,
        qty: qtyValue,
      },
    ]);

    // setCartProduct((prev) =>
    //   !!prev.find((item) => item.id === productData.id)
    //     ? [
    //         ...prev,
    //         {
    //           id: productData.id,
    //           title: productData.title,
    //           description: productData.description,
    //           price: productData.price,
    //           thumbnail: productData.thumbnail,
    //           qty: qtyValue,
    //         },
    //       ]
    //     : [...prev, productData]
    // );

    // localStorage.setItem(
    //   "cartProductList",
    //   JSON.stringify([
    //     ...localStorageCartProduct,
    //     {
    //       id: productData.id,
    //       title: productData.title,
    //       description: productData.description,
    //       price: productData.price,
    //       thumbnail: productData.thumbnail,
    //       qty: 1,
    //     },
    //   ])
    // );
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
