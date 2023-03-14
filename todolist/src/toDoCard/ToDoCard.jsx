import { useState } from "react";
import "./index.css";

const ToDoCard = ({ todoData, setNewTodoMock }) => {
  const [checkTodo, setCheckTodo] = useState(todoData.completed);

  const completedTaskCheck = (e) => {
    setCheckTodo(e.target.checked);
    setNewTodoMock((prev) => [
      ...prev.filter((prev) => prev.id !== todoData.id),
      {
        id: todoData.id,
        todo: todoData.todo,
        hour: todoData.hour,
        completed: checkTodo,
      },
    ]);
    console.log(e.target.checked);
  };

  const OnClickDeliteCard = () => {
    setNewTodoMock((prev) => [
      ...prev.filter((prev) => prev.id !== todoData.id),
      ,
      {
        id: prev.id,
        todo: todoData.todo,
        hour: todoData.hour,
        completed: checkTodo,
      },
    ]);
    console.log(todoData);
  };
  return (
    <div className={`todo_card ${checkTodo && "completed"}`}>
      <input
        className="checkboxInput"
        type="checkbox"
        checked={checkTodo}
        onChange={completedTaskCheck}
      />
      <div className="todo_info" onClick={OnClickDeliteCard}>
        <p>{todoData.hour}</p>
        <h3>{todoData.todo}</h3>
        {/* <p>or don't</p> */}
      </div>
    </div>
  );
};

export default ToDoCard;
