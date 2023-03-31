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
            <div className={styles.container}>
              <img
                src="https://streetviewhub.com/shots"
                alt={item.name}
                className={styles.img}
              />
              <div className={styles.cardInfo}>
                <h4>Attraction type:</h4>
                <ul className={styles.list}>
                  {item["@type"].map((element) => (
                    <li key={element}>- {element}</li>
                  ))}
                </ul>
                <hr />
                <h4>Contacts:</h4>

                <span className={styles.contract}>
                  {item.address.addressLocality}, {item.address.addressRegion},
                  {` ${item.address.addressCountry}`}
                </span>

                <p className={styles.contract}>
                  <span className={styles.span}>Tel:</span> {item.telephone}
                </p>
                <p className={styles.contract}>
                  <span className={styles.span}>More info:</span>
                </p>
                <a
                  className={styles.contract}
                  href="https://www.theadventureisland.com/"
                >
                  {item.url}
                </a>
              </div>
            </div>
            <iframe
              className={styles.googleMap}
              src={`https://maps.google.com/maps/?q=+${item.geo.latitude}+,+${item.geo.longitude}&output=embed`}
            ></iframe>
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
