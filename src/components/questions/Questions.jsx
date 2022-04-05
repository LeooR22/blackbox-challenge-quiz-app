import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PointsContext from "../../context/PointsContext";
import { useFetch } from "../../hooks/useFetch";

export const Questions = () => {
  const navigate = useNavigate();

  const { setPoints, points } = useContext(PointsContext);

  const { id } = useParams();

  const { data, loading } = useFetch();
  if (loading) return <h1>Loading...</h1>;

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
    console.log(option);
    if (type === "multiple" && correct_answer === option) {
      setPoints({
        userPoints: points.userPoints + 10,
        quizPoints: points.quizPoints + 10,
      });
      console.log("+10 pts");
    } else if (type === "boolean" && correct_answer === option) {
      setPoints({
        userPoints: points.userPoints + 5,
        quizPoints: points.quizPoints + 5,
      });
      console.log("+5 pts");
    } else if (type === "multiple") {
      setPoints({
        userPoints: points.userPoints + 0,
        quizPoints: points.quizPoints + 10,
      });

      console.log("+0 pts :c");
    } else if (type === "boolean") {
      setPoints({
        userPoints: points.userPoints + 0,
        quizPoints: points.quizPoints + 5,
      });

      console.log("+0 pts :c");
    }
    // Crear useContext con pts usuario
    // Crear ruta resultados con btn play again que lleve al lobby

    // Crear navigate hasta array.lenght si no llevar a ruta resultados
    if (data.length === parseInt(id)) {
      navigate(`/results`);
    } else {
      navigate(`/questions/${parseInt(id) + 1}`);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="card mb-3 container">
        <div className="row g-0">
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
          <div className="col-md-8">
            <div className="card-body">
              {sort_answers.map((option) => (
                <button
                  key={option}
                  onClick={() => handleAnswerSelection(option)}
                  className="btn btn-outline-primary w-100 mb-4 mt-3"
                >
                  {option.replace(/&quot;/g, "|").replace(/&#039;/g, "´")}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
