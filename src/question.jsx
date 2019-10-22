import React from 'react';

const Question = props => {
  const options = props.options.map((answer, index) => (
    <li key={index}>
      <input type="radio" id={`answers${index}`} name="answers" value={index} />
      <label for={`answers${index}`}>{answer}</label>
    </li>
  ));
  return (
    <div>
      <div>{props.text}</div>
      <div>
        <ul>
          {options}
        </ul>
      </div>
    </div>
  );
}

export default Question;