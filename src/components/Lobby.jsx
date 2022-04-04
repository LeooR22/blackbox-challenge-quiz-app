import React from "react";
import { Link } from "react-router-dom";

export const Lobby = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <Link to={"/questions/1"}>
        <button className="btn btn-primary btn-lg">Start Quiz</button>
      </Link>
    </div>
  );
};
