export const answerSelected = (
  correct_answer,
  opt,
  points,
  setPoints,
  type
) => {
  if (type === "multiple" && correct_answer === opt) {
    setPoints({
      userPoints: points.userPoints + 10,
      quizPoints: points.quizPoints + 10,
    });
    console.log("+10 +10");
  } else if (type === "boolean" && correct_answer === opt) {
    setPoints({
      userPoints: points.userPoints + 5,
      quizPoints: points.quizPoints + 5,
    });
    console.log("+5 +5");
  } else if (type === "multiple") {
    setPoints({
      userPoints: points.userPoints + 0,
      quizPoints: points.quizPoints + 10,
    });
    console.log("+0 +10");
  } else if (type === "boolean") {
    setPoints({
      userPoints: points.userPoints + 0,
      quizPoints: points.quizPoints + 5,
    });
    console.log("+0 +5");
  }
  // setPoints({
  //   userPoints: points.userPoints + 0,
  //   quizPoints: points.quizPoints + 5,
  // });
  console.log("+0 +5");
  console.log(correct_answer);
  console.log(opt);
  console.log(points);
  console.log(setPoints);
  console.log(type);
};

export const nextQuestions = (data, id, navigate) => {
  if (data.length === parseInt(id)) {
    navigate(`/results`);
  } else {
    navigate(`/questions/${parseInt(id) + 1}`);
  }
};
