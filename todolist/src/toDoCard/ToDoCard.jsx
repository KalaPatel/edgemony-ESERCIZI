import "./index.css";
const ToDoCard = ({ todoData }) => {
  return (
    <div className="todo_card">
      <input className="checkboxInput" type="checkbox" />
      <div className="todo_info">
        <p>{todoData.hour}</p>
        <h3>{todoData.todo}</h3>
        {/* <p>or don't</p> */}
      </div>
    </div>
  );
};

export default ToDoCard;
