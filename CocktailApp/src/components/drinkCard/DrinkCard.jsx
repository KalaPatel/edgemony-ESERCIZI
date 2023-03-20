import "./index.scss";

const DrinkCard = ({ data }) => {
  return (
    <div className="DrinkCard">
      <div className="Card">
        <img src={data.strDrinkThumb} alt={data.strDrink} />
        <h2 className="drinkName">{data.strDrink}</h2>
      </div>
      <div className="drink_infoBox">
        <div className="firstRow-box">
          <h2 className="drink_name">{data.strDrink}</h2>
          <p>{data.strAlcoholic}</p>
        </div>
        <p>
          <strong>Type: </strong> {data.strGlass}
        </p>
        <p className="drinkDescription">{data.strInstructions}</p>
      </div>
    </div>
  );
};
export default DrinkCard;
