import styles from "./index.module.scss";
import { useContext } from "react";
import { Context } from "../../store";

const NewTaskModal = () => {
  const { state, dispatch } = useContext(Context);

  const onHandleCloseModal = () => dispatch({ type: "SET_MODAL_OPEN" });

  const toDoTextInput = (e) =>
    dispatch({ type: "todoText", payload: e.target.value });

  const onHandleCheck = (e) =>
    dispatch({ type: "completed", payload: e.target.checked });

  const onHandleUsername = (e) =>
    dispatch({ type: "SET_USERNAME", payload: e.target.value });

  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "CREATE_NEW_TASK", payload: state.newToDoObj });
    dispatch({ type: "SET_MODAL_OPEN" });
    dispatch({ type: "completed", payload: false });
    dispatch({ type: "todoText", payload: "" });
    dispatch({ type: "SET_USERNAME", payload: "" });
  };

  return (
    <div className={styles.Modal}>
      <div className={styles.wrapper}>
        <form className={styles.form} onSubmit={onHandleSubmit}>
          <div className={styles.firstRow}>
            <input
              type="text"
              placeholder="Username"
              className={styles.username}
              value={state.newToDoObj.username}
              onChange={onHandleUsername}
              required
            />
            <label htmlFor="checkbox">Completed</label>
            <input
              className={styles.checkbox}
              type="checkbox"
              name="checkbox"
              onChange={onHandleCheck}
            />
          </div>
          <textarea
            name=""
            cols="40"
            rows="15"
            placeholder="New To Do"
            value={state.newToDoObj.todo}
            onChange={toDoTextInput}
            required
          ></textarea>

          <input type="submit" value="ADD" className={styles.submitBtn} />
        </form>
        <button className={styles.closeBtn} onClick={onHandleCloseModal}>
          X
        </button>
      </div>
    </div>
  );
};

export default NewTaskModal;
