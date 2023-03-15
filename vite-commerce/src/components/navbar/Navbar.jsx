import { useState } from "react";
import "./index.css";

const Navbar = ({ setEndpointValue }) => {
  const [inputValue, setInputValue] = useState("");

  const onHandleInput = (e) => setInputValue(() => e.target.value);

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
    </div>
  );
};

export default Navbar;
