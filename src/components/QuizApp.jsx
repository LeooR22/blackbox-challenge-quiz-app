import React, { useState } from "react";
import PointsContext from "../context/PointsContext";
import { AppRouter } from "../routes/AppRouter";

export const QuizApp = () => {
  const [points, setPoints] = useState({
    userPoints: 0,
    quizPoints: 0,
  });

  return (
    <PointsContext.Provider
      value={{
        points,
        setPoints,
      }}
    >
      <AppRouter />
    </PointsContext.Provider>
  );
};
