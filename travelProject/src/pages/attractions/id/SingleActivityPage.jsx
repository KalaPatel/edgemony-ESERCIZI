import styles from "./index.module.scss";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { GET } from "../../../utils/https.js";
import { attractionsMock } from "../../../mock/attractionsMock";

export default function SingleAttractionPage() {
  const [attractionInfo, setAttractionInfo] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    GET(`attractions?$filter=name%20eq%20%27${id}%27`).then((data) => {
      if (data.statusCode <= 400) {
        console.log("sono la fetch");
        setAttractionInfo(data.results);
      } else {
        const filteredActivity = attractionsMock.filter(
          (item) => item.name == `${id}`
        );
        setAttractionInfo(filteredActivity);
      }
    });
  }, []);

  return (
    <>
      {attractionInfo.length > 0 ? (
        attractionInfo.map((item) => (
          <div className={styles.wrapper} key={item.name}>
            <h1>{item.name}</h1>
            <img
              src="https://streetviewhub.com/shots"
              alt={attractionInfo.title}
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
