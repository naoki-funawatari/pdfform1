import React from 'react';
import Question from './question';

const createQuestion = (quizIndex, questions) => {
  if (quizIndex < questions.length) {
    const quiz = questions[quizIndex];
    const options = [quiz.option1, quiz.option2, quiz.option3, quiz.option4];
    return (<Question key={quizIndex} text={quiz.question} options={options} />);
  }

  return (<h1>お疲れさまです</h1>);
}

const Quiz = props => {
  const [quizIndex, setQuizIndex] = React.useState(0);
  let question = createQuestion(quizIndex, props.questions);
  React.useEffect(() => {
    question = createQuestion(quizIndex, props.questions);
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
      {quizIndex < props.questions.length ?
        <button type="button" onClick={handleToNextClick}>次へ</button> :
        <div>
          <button type="button" onClick={handleResultClick}>結果</button>
          <button type="button" onClick={handleToFirstClick}>最初へ</button>
        </div>}
    </form>
  );
}

export default Quiz;