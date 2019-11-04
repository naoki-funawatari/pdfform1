import React, { useState, useEffect } from 'react';
import Quiz from './quiz';

const Reception = () => {
  const [element, setEelement] = useState(<h1>Now Loading...</h1>);

  useEffect(() => {
    const endpoint = 'https://us-central1-hana-q-9edb8.cloudfunctions.net/questions';
    fetch(endpoint)
      .then(res => res.json())
      .then(res => {
        // お、何か読み込んでそうだぞ。と思わせるための待ち時間
        setTimeout(() => {
          setEelement(<Quiz questions={res} />);
        }, 1000);
      });
  }, [0]);

  return (<>{element}</>)
}

export default Reception;