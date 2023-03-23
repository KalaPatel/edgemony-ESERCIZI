import style from "./index.module.scss";

const DrinkCard = ({ data, setsingleDrinkModalStatus }) => {
  const onClickModalOpen = () => {
    setsingleDrinkModalStatus((prev) => ({
      ...prev,
      isVisible: true,
      data: data,
      objIndex: data.indexObj,
    }));
  };

  return (
    <div className={style.DrinkCard} onClick={onClickModalOpen}>
      <div className={style.card}>
        <img src={data.strDrinkThumb} alt={data.strDrink} />
        <h2 className={style.drinkName}>{data.strDrink}</h2>
      </div>
      <div className={style.infoBox}>
        <div className={style.firstRow}>
          <h2 className="drink_name">{data.strDrink}</h2>
          <p>{data.strAlcoholic}</p>
        </div>
        <p>
          <strong>Type: </strong> {data.strGlass}
        </p>
        <p className={style.description}>{data.strInstructions}</p>
      </div>
    </div>
  );
};
export default DrinkCard;
