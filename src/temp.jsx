import React from "react";

const practice = () => {
  const title = "Hello JSX!!";

  const detail = (param) => {
    return <h2>{param}</h2>;
  };

  const isEmpty = true;

  return (
    <>
      {/* 変数呼び出し */}
      <h1>{title}</h1>

      {/* 関数呼び出し */}
      {detail("detail JSX")}

      {/* 三項演算子を使う */}
      {isEmpty ? <p>Welcome</p> : <p>Get Back</p>}
    </>
  );
};

export default practice;
