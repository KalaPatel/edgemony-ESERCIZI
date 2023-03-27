import style from "./index.module.scss";
import { heroDataArr } from "./../../components/utils/func";

const CategorySection = ({ setCategory, setHeroStyle }) => {
  const onClickCategorySet = (category, text, img) => {
    setCategory(category);
    setHeroStyle(() => ({
      text: text,
      img: img,
    }));
  };

  return (
    <div className={style.CategorySection}>
      <ul className={style.categoryList}>
        <li
          onClick={() =>
            onClickCategorySet(
              "Ordinary Drink",
              heroDataArr.ordinary,
              heroDataArr.ordinaryImg
            )
          }
        >
          Ordinary Drink
        </li>
        <li
          onClick={() =>
            onClickCategorySet(
              "Cocktail",
              heroDataArr.cocktail,
              heroDataArr.cocktailImg
            )
          }
        >
          Cocktail
        </li>
        <li
          onClick={() =>
            onClickCategorySet("Shake", heroDataArr.shake, heroDataArr.shakeImg)
          }
        >
          Shake
        </li>
        <li
          onClick={() =>
            onClickCategorySet("Cocoa", heroDataArr.cocoa, heroDataArr.cocoaImg)
          }
        >
          Cocoa
        </li>
        <li
          onClick={() =>
            onClickCategorySet("Shot", heroDataArr.shot, heroDataArr.shotImg)
          }
        >
          Shot
        </li>
        <li
          onClick={() =>
            onClickCategorySet(
              "Homemade Liqueur",
              heroDataArr.liqueur,
              heroDataArr.liqueurImg
            )
          }
        >
          Homemade Liqueur
        </li>
        <li
          onClick={() =>
            onClickCategorySet("Beer", heroDataArr.beer, heroDataArr.beerImg)
          }
        >
          Beer
        </li>
        <li
          onClick={() =>
            onClickCategorySet(
              "Soft Drink",
              heroDataArr.softDrink,
              heroDataArr.softDrinkImg
            )
          }
        >
          Soft Drink
        </li>
        <li
          onClick={() =>
            onClickCategorySet(
              "Punch / Party Drink",
              heroDataArr.punch,
              heroDataArr.punchImg
            )
          }
        >
          Punch / Party Drink
        </li>
        <li
          onClick={() =>
            onClickCategorySet(
              "Coffee / Tea",
              heroDataArr.coffeeTea,
              heroDataArr.coffeeTeaImg
            )
          }
        >
          Coffee / Tea
        </li>
      </ul>
    </div>
  );
};

export default CategorySection;
