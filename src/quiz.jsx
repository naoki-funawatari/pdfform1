import React from 'react';
import Question from './question';
import data from "./questions.json";

const createQuestion = quizIndex => {
  if (quizIndex < data.questions.length) {
    const quiz = data.questions[quizIndex];
    return (<Question key={quizIndex} text={quiz.question} options={quiz.options} />);
  }

  return (<p>うーん、全問正解！！</p>);
}

const Quiz = () => {
  const [quizIndex, setQuizIndex] = React.useState(0);
  let question = createQuestion(quizIndex);
  React.useEffect(() => {
    question = createQuestion(quizIndex);
  }, [quizIndex]);

  const handleClick = () => {
    setQuizIndex(quizIndex + 1);
  };

  return (
    <form>
      {question}
      <button type="button" onClick={handleClick}>次へ</button>
    </form>
  );
}

export default Quiz;