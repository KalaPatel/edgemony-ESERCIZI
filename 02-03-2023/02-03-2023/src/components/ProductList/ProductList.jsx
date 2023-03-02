import "./index.css";
import CardProduct from "../cardProducts";

const ProductList = ({ productList }) => {
  return (
    <div className="cardProductCont">
      {productList.map((item) => (
        <div>
          <CardProduct productData={item} key={item.id} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
