import { useReducer } from "react";
import { Context } from "./store";
import { initialState } from "./store/state";
import { mainReducer } from "./store/reducers";
import Hero from "./components/hero";
import TasksList from "./components/tasksList";
import styles from "./App.module.scss";
import NewTaskModal from "./components/newTaskModal/NewTaskModal";

function App() {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  const onHandleModalOpen = () => dispatch({ type: "SET_MODAL_OPEN" });

  return (
    <div className={styles.App}>
      <Context.Provider value={{ state, dispatch }}>
        <Hero />
        <TasksList />
        <button className={styles.addTodo} onClick={onHandleModalOpen}>
          {"+"}
        </button>
        {state.isModalVisibile && <NewTaskModal />}
      </Context.Provider>
    </div>
  );
}

export default App;
