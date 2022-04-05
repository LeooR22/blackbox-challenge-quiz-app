import React from "react";

export const Answers = ({ sort_answers, handleAnswerSelection }) => {
  return (
    <div className="card-body">
      {sort_answers.map((answer) => (
        <button
          key={answer}
          onClick={() => handleAnswerSelection(answer)}
          className="btn btn-outline-primary w-100 mb-4 mt-3"
        >
          {answer.replace(/&quot;/g, "|").replace(/&#039;/g, "´")}
        </button>
      ))}
    </div>
  );
};
