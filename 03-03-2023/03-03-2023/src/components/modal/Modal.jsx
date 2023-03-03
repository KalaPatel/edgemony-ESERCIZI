import "./index.css";
import Button from "../button";

const Modal = ({ setModalStatus }) => {
  const refuseFunction = () => {
    alert("Accetta i cookies >:(");
  };
  return (
    <div className="modal">
      <div className="modal_container">
        <h3>Se i prodotti vuoi comprare, i cookies devi accettare</h3>
        <div className="modalCookiesBtn">
          <Button
            styleType="btn"
            text="Annulla"
            clickFunction={refuseFunction}
          />
          <Button
            styleType="btn"
            text="Accetta"
            clickFunction={() => {
              setModalStatus(() => false);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
