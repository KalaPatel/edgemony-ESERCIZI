import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";

const ActivityCards = ({ data }) => {
  const navigate = useNavigate();

  const onHandleClick = () => {
    navigate(`/activity/${data.id}`);
  };
  return (
    <div className={styles.Card} onClick={onHandleClick}>
      <span> {`${data.title}`.slice(0, 9)}</span>
    </div>
  );
};

export default ActivityCards;
