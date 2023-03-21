import "./index.scss";
import { BiArrowBack } from "react-icons/bi";

const SingleDrinkModal = ({ data, setsingleDrinkModalStatus }) => {
  const onClickModalClose = () => {
    setsingleDrinkModalStatus((prev) => ({
      ...prev,
      isVisible: false,
    }));
  };
  return (
    <div className="SingleDrinkModal">
      <div className="SingleDrinkModal__overlay">
        <div className="overlay__firstRow">
          <div className="icons">
            <BiArrowBack className="arrowIcon" onClick={onClickModalClose} />
          </div>
          <img src={data.strDrinkThumb} alt={data.strDrink} />
        </div>

        <div className="overlay__secondRow">
          <h1>{data.strDrink}</h1>
          <div className="main_infoBox">
            <div className="typeDescription">
              <h4> Glass Type</h4>
              <p className="description"> {data.strGlass}</p>
            </div>
            <hr />
            <div>
              <h5> Cocktail Type</h5>
              <p className="description"> {data.strCategory}</p>
            </div>
          </div>

          <div className="overlay__thirdRow">
            <p>Ingredients:</p>
            <ul>
              <li>{data.strIngredient1}</li>
              <li>{data.strIngredient2}</li>
              <li>{data.strIngredient3}</li>
              <li>{data.strIngredient4}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleDrinkModal;
