import "./index.css";

const ModalCart = ({ cartData }) => {
  return (
    <div className="ModalCart">
      <div className="productCartImg">
        <img src={cartData.thumbnail} alt={cartData.title} />
      </div>

      <div className="productCartInfo">
        <h4>{cartData.title.slice(0, 15)}</h4>
        <p>$ {cartData.price}</p>
      </div>
      {/* <div className="qtySection">
        <p>-</p>
        <p>1</p>
        <p>+</p>
      </div> */}
    </div>
  );
};

export default ModalCart;
