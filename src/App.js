import React from 'react';
import './index.scss';

const questions = [
  {
    title: 'Что является ориентиром для моряка в море?',
    variants: [
      'Полярная звезда', 
      'Попугай', 
      'Команда'
    ],
    correct: 0,
  },
  {
    title: 'Когда отмечают старый Новый Год?',
    variants: [
      '31 декабря', 
      'С 13 по 14 января', 
      '10 января'
    ],
    correct: 1,
  },
  {
    title: 'Какой основной ингредиент нужен для создания пирожков?',
    variants: [
      'Гречка',
      'Мука',
      'Чай',
    ],
    correct: 1,
  },
  {
    title: 'Как называется прямая линия, у которой есть начало, но нет конца?',
    variants: [
      'Бесконечная линия',
      'Не знаю',
      'Луч',
    ],
    correct: 2,
  },
  {
    title: 'Скульптура «Медный всадник» посвящена …',
    variants: [
      'Петру Великому',
      'Ярославу Мудрому',
      'Екатерине Первой',
    ],
    correct: 0,
  },
];

function Result({ correct }) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>Вы набрали {correct} из {questions.length} баллов</h2>
      <a href='/'>
        <button>Попробовать снова</button>
      </a>
    </div>
  );
}

function Game({ step, question, onClickVariant}) {
  const percentage = Math.round((step / questions.length) * 100);



  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text, index) => (<li onClick={() => onClickVariant(index)} key={text}>{text}</li>))}
      </ul>
    </>
  );
}

function App() {

  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  const question = questions[step];

  const onClickVariant = (index) => {
    console.log(step, index);
    setStep(step + 1);

    if(index === question.correct) {
      setCorrect(correct + 1);
    }
  }


  return (
    <div className="App">
      {step !== questions.length ? <Game step={step} question={question} onClickVariant={onClickVariant} /> : (<Result correct={correct} />)}
    </div>
  );
}

export default App;
