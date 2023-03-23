import { IoCloseSharp } from "react-icons/io5";
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";
import { ingredientsArray } from "./../utils/func";
import style from "./index.module.scss";

const SingleDrinkModal = ({
  data,
  setsingleDrinkModalStatus,
  filterData,
  counter,
}) => {
  const onClickModalClose = () => {
    setsingleDrinkModalStatus((prev) => ({
      ...prev,
      isVisible: false,
    }));
  };

  const onHandleNextBtn = () => {
    setsingleDrinkModalStatus((prev) => ({
      ...prev,
      data: filterData[prev.objIndex + 1],
      objIndex: prev.objIndex + 1,
    }));
  };

  const onHandleBackBtn = () => {
    setsingleDrinkModalStatus((prev) => ({
      ...prev,
      data: filterData[prev.objIndex - 1],
      objIndex: prev.objIndex - 1,
    }));
  };

  return (
    <div className={style.SingleDrinkModal}>
      <div>
        {counter > 0 ? (
          <FaChevronCircleLeft
            className={style.leftBtn}
            onClick={onHandleBackBtn}
          />
        ) : (
          <FaChevronCircleLeft className={style.disable} />
        )}
      </div>

      <div className={style.overlay}>
        <div className={style.firstRow}>
          <div className={style.icons}>
            <IoCloseSharp
              className={style.crossIcon}
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

      <div>
        {counter < filterData.length - 1 ? (
          <FaChevronCircleRight
            className={style.rightBtn}
            onClick={onHandleNextBtn}
          />
        ) : (
          <FaChevronCircleRight opacity="0" />
        )}
      </div>
    </div>
  );
};

export default SingleDrinkModal;
