import React from 'react';
import Question from './question';
import data from "./questions.json";

const createQuestion = quizIndex => {
  if (quizIndex < data.questions.length) {
    const quiz = data.questions[quizIndex];
    return (<Question key={quizIndex} text={quiz.question} options={quiz.options} />);
  }

  return (<h1>お疲れさまです</h1>);
}

const Quiz = () => {
  const [quizIndex, setQuizIndex] = React.useState(0);
  let question = createQuestion(quizIndex);
  React.useEffect(() => {
    question = createQuestion(quizIndex);
  }, [quizIndex]);

  const handleToNextClick = () => {
    setQuizIndex(quizIndex + 1);
  };
  const handleToFirstClick = () => {
    setQuizIndex(0);
  };
  const handleResultClick = () => {
    alert('うーん、全問正解！！');
  };

  return (
    <form>
      {question}
      {quizIndex < data.questions.length ?
        <button type="button" onClick={handleToNextClick}>次へ</button> :
        <div>
          <button type="button" onClick={handleResultClick}>結果</button>
          <button type="button" onClick={handleToFirstClick}>最初へ</button>
        </div>}
    </form>
  );
}

export default Quiz;