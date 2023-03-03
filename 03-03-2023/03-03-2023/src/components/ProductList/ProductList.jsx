import { useState, useEffect } from "react";
import "./index.css";
import CardProduct from "../cardProducts";

const ProductList = ({ setCardModalStatus }) => {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setDataList(data.products));
  }, []);

  return (
    <div className="cardProductCont">
      {dataList.map((item) => (
        <div key={item.id}>
          <CardProduct
            productData={item}
            setCardModalStatus={setCardModalStatus}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
