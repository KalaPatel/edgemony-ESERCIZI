import "./index.css";
import { useState } from "react";
const NewToDo = ({ setNewTodoMock, idValue, newToDoMock }) => {
  const [addNewToDo, setAddNewToDo] = useState("");
  const [hour, setHour] = useState("");
  const addNewToDoInput = (e) => {
    setAddNewToDo(e.target.value);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();

    setNewTodoMock([
      ...newToDoMock,
      {
        id: idValue + 1,
        todo: addNewToDo,
        hour: hour,
      },
    ]);

    setNewTodoMock(...newToDoArr);
  };

  return (
    <div className="NewToDo">
      <h2>Add a to do!</h2>
      <form className="formComponent" onSubmit={onHandleSubmit}>
        <input
          type="text"
          value={addNewToDo}
          placeholder="New To Do"
          onChange={addNewToDoInput}
        />

        <label htmlFor="hour">Hour</label>
        <input
          type="time"
          name="hour"
          value={hour}
          onChange={(e) => setHour(e.target.value)}
        />
        <button type="submit">ADD</button>
      </form>
    </div>
  );
};

export default NewToDo;
