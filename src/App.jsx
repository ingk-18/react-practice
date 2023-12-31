import React, { useState, useEffect } from "react";

const Unmount = () => {
  const [mount, setUnmount] = useState(true);

  return (
    <>
      {mount && <Timer />}
      <button onClick={() => setUnmount((prev) => !prev)}>unMount</button>
    </>
  );
};

const Timer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    // クリーンアップ処理
    return () => {
      console.log("クリーンアップを実行");
      clearInterval(intervalId);
    };
  }, [count]);

  return <div>Count: {count}</div>;
};

export default Unmount;
