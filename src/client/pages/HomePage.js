import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <h1>HomePage</h1>
      <div>HomePage component</div>
      <Link to="/users">To Users</Link>
      <br />
      <button onClick={() => console.log("hi there")}>Press me!</button>
    </>
  );
};

export default { component: HomePage };
