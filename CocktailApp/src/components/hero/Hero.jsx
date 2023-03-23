import style from "./index.module.scss";

const Hero = ({ text, img, setReservationModalOpen }) => {
  const onHandleBookBtn = () => {
    setReservationModalOpen(() => true);
  };

  return (
    <div className={style.Hero}>
      <div className={style.heroTextWrapper}>
        <h1 className={style.text}>{text}</h1>
        <button className={style.btn} onClick={onHandleBookBtn}>
          Book your table
        </button>
      </div>
      <div>
        <img src={img} />
      </div>
    </div>
  );
};

export default Hero;
