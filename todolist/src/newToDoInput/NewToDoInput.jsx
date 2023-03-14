import "./index.css";
import { useState } from "react";
const NewToDo = ({ setNewTodoMock }) => {
  const [addNewToDo, setAddNewToDo] = useState("");
  const [hour, setHour] = useState("");
  const addNewToDoInput = (e) => {
    setAddNewToDo(e.target.value);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();

    setNewTodoMock((prev) => {
      if (
        !prev.find(
          (prev) => prev.todo.toLowerCase() === addNewToDo.toLowerCase()
        )
      ) {
        return [
          ...prev,
          {
            id: prev.length + 1,
            todo: addNewToDo,
            hour: hour,
            completed: false,
          },
        ];
      } else {
        alert("This todo already exist!");
        return prev;
      }
    });

    setAddNewToDo("");
  };

  return (
    <div className="NewToDo">
      <h2>Add a to do!</h2>
      <form className="formComponent" onSubmit={onHandleSubmit}>
        <input
          type="text"
          value={addNewToDo}
          placeholder="New ToDo"
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
