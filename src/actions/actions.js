export const answerSelected = (
  opt,
  correct_answer,
  points,
  setPoints,
  type
) => {
  if (type === "multiple" && correct_answer === opt) {
    setPoints({
      userPoints: points.userPoints + 10,
      quizPoints: points.quizPoints + 10,
    });
  } else if (type === "boolean" && correct_answer === opt) {
    setPoints({
      userPoints: points.userPoints + 5,
      quizPoints: points.quizPoints + 5,
    });
  } else if (type === "multiple") {
    setPoints({
      userPoints: points.userPoints + 0,
      quizPoints: points.quizPoints + 10,
    });
  } else if (type === "boolean") {
    setPoints({
      userPoints: points.userPoints + 0,
      quizPoints: points.quizPoints + 5,
    });
  }
};

export const nextQuestions = (data, id, navigate) => {
  if (data.length === parseInt(id)) {
    navigate(`/results`);
  } else {
    navigate(`/questions/${parseInt(id) + 1}`);
  }
};

export const filterData = (arr, id) => {
  return arr.filter((arr) => arr.id === parseInt(id));
};

export const arrSort = (arr1, str) => {
  return arr1.concat(str).sort((a, b) => 0.5 - Math.random());
};

//git push
