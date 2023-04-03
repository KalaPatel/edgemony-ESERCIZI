import "./index.css";
import { useContext } from "react";
import { CounterContext } from "../../store/context";

const Counter = () => {
  const { state, dispatch } = useContext(CounterContext);

  const onHandleCounterCount = (e) => {
    switch (e.target.className) {
      case e.target.className:
        return dispatch({ type: e.target.className });
    }
  };

  return (
    <div className="Counter">
      <button className="increment" onClick={onHandleCounterCount}>
        +
      </button>
      <span>{state.value}</span>
      <button className="decrement" onClick={onHandleCounterCount}>
        -
      </button>
      <button className="reset" onClick={onHandleCounterCount}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
