import React from "react";

export const QuestionCard = ({ id, category, difficulty, question }) => {
  return (
    <div className="col-md-4">
      <h2 className="rounded-start mt-3 mb-4">Question {id}/10</h2>
      <h6>
        <span>
          Category: <span className="text-success">{category}</span>
        </span>
      </h6>
      <h6>
        Difficulty: <span className="text-success">{difficulty}</span>
      </h6>

      <p className="mt-3">
        {question.replace(/&quot;/g, "|").replace(/&#039;/g, "´")}
      </p>
    </div>
  );
};
