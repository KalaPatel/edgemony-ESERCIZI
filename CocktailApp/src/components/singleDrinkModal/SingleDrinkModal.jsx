import { BiArrowBack } from "react-icons/bi";
import { ingredientsArray } from "./../utils/func";
import style from "./index.module.scss";

const SingleDrinkModal = ({ data, setsingleDrinkModalStatus }) => {
  const onClickModalClose = () => {
    setsingleDrinkModalStatus((prev) => ({
      ...prev,
      isVisible: false,
    }));
  };

  console.log(data.strVideo);

  return (
    <div className={style.SingleDrinkModal}>
      <div className={style.overlay}>
        <div className={style.firstRow}>
          <div className={style.icons}>
            <BiArrowBack
              className={style.arrowIcon}
              onClick={onClickModalClose}
            />
          </div>

          {data.strVideo !== null ? (
            <iframe
              width="100%"
              height="110%"
              src={`${data.strVideo.replace(
                "watch?v=",
                "embed/"
              )}?autoplay=1&mute=1`}
            ></iframe>
          ) : (
            <img src={data.strDrinkThumb} alt={data.strDrink} />
          )}
        </div>

        <div className={style.secondRow}>
          <h1>{data.strDrink}</h1>
          <div className={style.infoBox}>
            <div>
              <h3> Glass Type</h3>
              <p> {data.strGlass}</p>
            </div>
            <hr />
            <div>
              <h3> Cocktail Type</h3>
              <p> {data.strCategory}</p>
            </div>
          </div>

          <div className={style.thirdRow}>
            <p>Ingredients:</p>
            <ul>
              {ingredientsArray(data).map((ingredient) => (
                <li key={ingredient}>
                  <img
                    src={
                      "https://www.thecocktaildb.com/images/ingredients/" +
                      ingredient.replace(" ", "%20") +
                      "-Small.png"
                    }
                    alt={ingredient}
                  />
                  <p className={style.ingredientText}>{ingredient} </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleDrinkModal;
