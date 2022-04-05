import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import PointsContext from "../context/PointsContext";

export const Results = () => {
  const navigate = useNavigate();

  const { points, setPoints } = useContext(PointsContext);

  const { userPoints, quizPoints } = points;

  const handleGoLobby = () => {
    setPoints({
      userPoints: 0,
      quizPoints: 0,
    });
    navigate("/");
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center flex-column"
      style={{ height: "100vh" }}
    >
      <h1>
        Score: {userPoints}/{quizPoints}
      </h1>
      <button onClick={handleGoLobby} className="btn btn-primary btn-lg mt-3">
        Go lobby
      </button>
    </div>
  );
};
