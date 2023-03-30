import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";

const AttractionCard = ({ data, index }) => {
  const navigate = useNavigate();

  const onHandleClick = () => {
    navigate(data.name);
  };
  return (
    <div className={styles.Card} onClick={onHandleClick}>
      <div className={styles.image}>
        <img
          src={"https://streetviewhub.com/shots?" + index}
          alt="randomNatureImage"
        />
      </div>
      <div className={styles.textWrapper}>
        <h4>{data.name}</h4>
        {data.tags.map((element) => (
          <span key={element}>{`${element}`.split(" ")[0]}</span>
        ))}
      </div>
    </div>
  );
};

export default AttractionCard;
