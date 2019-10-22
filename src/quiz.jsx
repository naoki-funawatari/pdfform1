import React from 'react';
import Question from './question';
import data from "./questions.json";

const Quiz = () => {
  const questions = data.questions
    .map(question => (
      <Question text={question.question} options={question.options} />
    ));
  const handleClick = () => alert('うーん、全問正解！！');
  return (
    <form>
      {questions}
      <button type="button" onClick={handleClick}>解答</button>
    </form>
  );
}

export default Quiz;