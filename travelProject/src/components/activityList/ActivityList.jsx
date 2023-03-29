import styles from "./index.module.scss";
import { useState, useEffect } from "react";
import ActivityCards from "../activityCards/ActivityCards";
const ActivityList = () => {
  const [activityList, setActivityList] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setActivityList(data));
  }, []);
  return (
    <div className={styles.ActivityCards}>
      {activityList.map((item) => (
        <ActivityCards data={item} key={item.id} />
      ))}
    </div>
  );
};

export default ActivityList;
