import React, { useReducer } from "react";

// 初期状態の定義
const initialState = {
  count: 0,
};

// Reducer関数の定義
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      throw new Error("Unsupported action type");
  }
};

const App = () => {
  // useReducerを使用して状態とディスパッチ関数を取得
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div>
        <p>Count: {state.count}</p>
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
    </>
  );
};

export default App;
