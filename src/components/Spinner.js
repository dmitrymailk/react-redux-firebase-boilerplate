import React from "react";
import spinner from "./load.gif";

export default function Spinner() {
  return (
    <div>
      <h3>Loading...</h3>
      <img
        src={spinner}
        alt="Loading..."
        style={{ width: "200px", margin: "auto", display: "block" }}
      />
    </div>
  );
}
