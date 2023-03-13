import "./index.css";
import { toDoList } from "../mocks/toDoListMock";
import ToDoCard from "../toDoCard/ToDoCard";

const ToDoList = ({ newToDoMock, setIdValue }) => {
  const toDoArray = [...newToDoMock, ...toDoList];
  setIdValue(toDoList.length);
  return (
    <div className="todo_wrapper">
      {toDoArray.map((todo) => (
        <ToDoCard todoData={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default ToDoList;
