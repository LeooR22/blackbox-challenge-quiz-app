import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  answerSelected,
  arrSort,
  filterData,
  nextQuestions,
} from "../../actions/actions";
import PointsContext from "../../context/PointsContext";
import { useFetch } from "../../hooks/useFetch";
import { LoadingScreen } from "../LoadingScreen";
import { Answers } from "./Answers";
import { QuestionCard } from "./QuestionCard";

export const Questions = () => {
  const navigate = useNavigate();

  const { setPoints, points } = useContext(PointsContext);
  const { id } = useParams();
  const { data, loading } = useFetch();

  if (loading) return <LoadingScreen />;

  const currentQuestion = filterData(data, id);

  const {
    category,
    type,
    difficulty,
    question,
    correct_answer,
    incorrect_answers,
  } = currentQuestion[0];

  const sort_answers = arrSort(incorrect_answers, correct_answer);

  const handleAnswerSelection = (option) => {
    answerSelected(option, correct_answer, points, setPoints, type);

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
