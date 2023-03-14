import { useState } from "react";
import "./App.css";
import ToDoList from "./toDoList";
import { toDoList } from "./mocks/toDoListMock.js";
import NewToDo from "./newToDoInput";

function App() {
  const [newToDoMock, setNewTodoMock] = useState(toDoList);

  return (
    <div className="App">
      <NewToDo setNewTodoMock={setNewTodoMock} />

      <ToDoList newToDoMock={newToDoMock} setNewTodoMock={setNewTodoMock} />
    </div>
  );
}

export default App;
