import styles from "./index.module.scss";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { GET } from "../../../utils/https.js";
import { activitiesMock } from "../../../mock/activitiesMock";

export default function SingleActivityPage() {
  const [activityInfo, setActivityInfo] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    GET(`activities?$filter=name%20eq%20%27${id}%27`).then((data) => {
      if (data.statusCode <= 400) {
        console.log("sono la fetch");
        setActivityInfo(data.results);
      } else {
        const filteredActivity = activitiesMock.filter(
          (item) => item.name == `${id}`
        );
        setActivityInfo(filteredActivity);
      }
    });
  }, []);

  return (
    <>
      {activityInfo.length > 0 ? (
        activityInfo.map((item) => (
          <div className={styles.wrapper} key={item.name}>
            <h1>{item.name}</h1>
            <img
              src="https://streetviewhub.com/shots"
              alt={activityInfo.title}
              className={styles.img}
            />
          </div>
        ))
      ) : (
        <p>Nessun risultato trovato. Provate ad essere più specifici </p>
      )}

      {/* {activityInfo.length == 0 ? (
        <p>Nessun risultato trovato. Provate ad essere più specifici </p>
      ) : null} */}

      {/* <img
        src={activityInfo.image}
        alt={activityInfo.title}
        className={styles.img}
      />
      <p>{activityInfo.description} </p> */}
    </>
  );
}
