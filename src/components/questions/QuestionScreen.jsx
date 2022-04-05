import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { answerSelected, nextQuestions } from "../../actions/actions";
import PointsContext from "../../context/PointsContext";
import { useFetch } from "../../hooks/useFetch";
import { Answers } from "./Answers";
import { QuestionCard } from "./QuestionCard";

export const Questions = () => {
  const navigate = useNavigate();

  const { setPoints, points } = useContext(PointsContext);

  const { id } = useParams();

  const { data, loading } = useFetch();
  if (loading)
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );

  const currentQuestion = data.filter(
    (question) => question.id === parseInt(id)
  );

  const {
    category,
    type,
    difficulty,
    question,
    correct_answer,
    incorrect_answers,
  } = currentQuestion[0];

  const all_answers = incorrect_answers.concat(correct_answer);
  const sort_answers = all_answers.sort((a, b) => 0.5 - Math.random());

  const handleAnswerSelection = (option) => {
    answerSelected(option, type, correct_answer, points, setPoints);

    nextQuestions(data, id, navigate);
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="card mb-3 container">
        <div className="row g-0">
          <QuestionCard
            id={id}
            category={category}
            difficulty={difficulty}
            question={question}
          />
          <div className="col-md-8">
            <Answers
              sort_answers={sort_answers}
              handleAnswerSelection={handleAnswerSelection}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
