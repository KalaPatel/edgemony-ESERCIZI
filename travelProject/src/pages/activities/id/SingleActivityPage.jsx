import styles from "./index.module.scss";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function SingleActivityPage() {
  const [activityInfo, setActivityInfo] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setActivityInfo(data));
  }, []);

  return (
    <div className={styles.wrapper}>
      <h1>{activityInfo.title}</h1>
      <img
        src={activityInfo.image}
        alt={activityInfo.title}
        className={styles.img}
      />
      <p>{activityInfo.description} </p>
    </div>
  );
}
