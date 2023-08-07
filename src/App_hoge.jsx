import React, { useState, useEffect } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => {
      console.log("クリーンアップ処理実行");
      clearInterval(intervalId);
    };
  }, [count]);

  return <div>Count: {count}</div>;
};

export default Timer;
