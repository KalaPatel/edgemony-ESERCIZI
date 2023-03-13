import { useState } from "react";
import "./App.css";
import ToDoList from "./toDoList";
import NewToDo from "./newToDoInput";

function App() {
  const [newToDoMock, setNewTodoMock] = useState([]);
  const [idValue, setIdValue] = useState(null);
  console.log(newToDoMock);
  return (
    <div className="App">
      <NewToDo
        setNewTodoMock={setNewTodoMock}
        newToDoMock={newToDoMock}
        idValue={idValue}
      />
      <ToDoList newToDoMock={newToDoMock} setIdValue={setIdValue} />
    </div>
  );
}

export default App;
