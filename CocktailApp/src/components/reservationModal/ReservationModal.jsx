import style from "./index.module.scss";
import { useState } from "react";

const ReservationModal = ({
  setReservationModalOpen,
  setReservationData,
  styleType,
}) => {
  const [lastName, setLastName] = useState("");
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");

  const onHandleCloseModalClick = () => {
    setReservationData((prev) => ({
      ...prev,
      isVisible: false,
    }));
  };

  const onHandleLastName = (e) => {
    setLastName(() => e.target.value);
  };

  const onHandleDate = (e) => {
    setDate(() => e.target.value);
  };
  const onHandleHour = (e) => {
    setHour(() => e.target.value);
  };

  const onHadleSubmit = (e) => {
    e.preventDefault();
    setReservationData((prev) => ({
      ...prev,
      isVisible: true,
      lastName: lastName,
      date: date,
      hour: hour,
    }));

    setReservationModalOpen(() => false);
    setLastName(() => "");
    setDate(() => "");
    setHour(() => "");
  };

  return (
    <div className={`${style.ReservationModal} ${style[styleType]}`}>
      <div className={style.overlay} onClick={onHandleCloseModalClick}></div>
      <div className={style.wrapper}>
        <form onSubmit={onHadleSubmit} className={style.form}>
          <input
            type="text"
            value={lastName}
            onChange={onHandleLastName}
            placeholder="Last Name"
            required
          />
          <input type="date" value={date} onChange={onHandleDate} required />
          <input type="time" value={hour} onChange={onHandleHour} required />
          <input
            type="submit"
            value="Book!"
            className={style.submitBtn}
            onClick={onHandleCloseModalClick}
          />
        </form>
      </div>
    </div>
  );
};

export default ReservationModal;
