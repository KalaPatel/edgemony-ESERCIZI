import "./index.scss";

const CategorySection = ({ setCategory }) => {
  const onClickCategorySet = (e) => {
    setCategory(e.target.innerText);
  };
  return (
    <div className="CategorySection">
      <ul className="category-List">
        <li onClick={onClickCategorySet}>Ordinary Drink</li>
        <li onClick={onClickCategorySet}>Cocktail</li>
        <li onClick={onClickCategorySet}>Shake</li>
        <li onClick={onClickCategorySet}>Cocoa</li>
        <li onClick={onClickCategorySet}>Shot</li>
        <li onClick={onClickCategorySet}>Homemade Liqueur</li>
        <li onClick={onClickCategorySet}>Beer</li>
        <li onClick={onClickCategorySet}>Soft Drink</li>
        <li onClick={onClickCategorySet}>Punch / Party Drink</li>
        <li onClick={onClickCategorySet}>Coffee / Tea</li>
        <li onClick={onClickCategorySet}>Other / Unknown</li>
      </ul>
    </div>
  );
};

export default CategorySection;
