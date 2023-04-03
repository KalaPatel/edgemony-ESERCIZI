import { useReducer } from "react";
import { counterReducer } from "./store/reducer";
import { CounterContext, initialStates } from "./store/context";
import Counter from "./components/counter";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(counterReducer, initialStates);
  return (
    <div className="App">
      <CounterContext.Provider value={{ state, dispatch }}>
        <Counter />
        <p>Valore del counter in App: {state.value}</p>
      </CounterContext.Provider>
    </div>
  );
}

export default App;
