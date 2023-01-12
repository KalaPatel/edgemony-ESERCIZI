const qS = (element) => document.querySelector(element);
const qSA = (element) => document.querySelectorAll(element);
const cE = (type) => document.createElement(type);
let nMousePress = 0;
const todoGenerator = (todoId, todoText, isCompleted, parent) => {
  const todoEl = cE("div");
  const isCompletedEl = cE("div");
  const textEl = cE("p");

  todoEl.setAttribute("id", todoId);
  todoEl.className = "todo";
  isCompletedEl.className = "circle-check ";

  textEl.textContent = todoText;
  todoEl.append(isCompletedEl, textEl);

  isCompletedEl.addEventListener("click", () => {
    nMousePress++;
    if (nMousePress % 2 === 1) {
      isCompletedEl.style.backgroundColor = " rgba(211, 106, 20, 0.8)";
      textEl.style.textDecoration = "line-through";
    } else {
      isCompletedEl.style.backgroundColor = "rgb(240, 240, 240)";
      textEl.style.textDecoration = "none";
    }
  });
  parent.appendChild(todoEl);
};

export { qS, qSA, cE, todoGenerator };
