import React from "react";
import { useNavigate } from "react-router-dom";

export const Lobby = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/questions/1");
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <button onClick={handleStart} className="btn btn-primary btn-lg">
        Start Quiz
      </button>
    </div>
  );
};
