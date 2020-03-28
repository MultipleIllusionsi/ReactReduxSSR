import React from "react";

const HomePage = () => {
  return (
    <>
      <h1>HomePage</h1>
      <button onClick={() => console.log("hi there")}>Press me!</button>
    </>
  );
};

export default { component: HomePage };
