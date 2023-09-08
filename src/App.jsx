import { useEffect, useMemo, useState } from "react";
import "./app.css";
import Quiz from "./source/Quiz";
import Timer from "./source/Timer";


function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$ 0");
  const data = [
    {
      id: 1,
      question: "What is the capital of Italy?",
      answer: [
        {
          text: "Rome",
          correct: true,
        },
        {
          text: "Milan",
          correct: false,
        },
        {
          text: "Madride",
          correct: false,
        },
        {
          text: "Paris",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "Which gas is most abundant in Earth's atmosphere?",
      answer: [
        {
          text: " Nitrogen",
          correct: true,
        },
        {
          text: "Oxygen",
          correct: false,
        },
        {
          text: "Carbon dioxide",
          correct: false,
        },
        {
          text: " Hydrogen",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who wrote the play 'Hamlet'?",
      answer: [
        {
          text: "Charles Dickens",
          correct: false,
        },
        {
          text: "Jane Austen",
          correct: false,
        },
        {
          text: "William Shakespeare",
          correct: true,
        },
        {
          text: "F. Scott Fitzgerald",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: "What is the chemical symbol for the element gold?",
      answer: [
        {
          text: "Go",
          correct: false,
        },
        {
          text: "Ag",
          correct: false,
        },
        {
          text: "Au",
          correct: true,
        },
        {
          text: "Ge",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "Which of the following countries is the largest by land area?",
      answer: [
        {
          text: "Russia",
          correct: true,
        },
        {
          text: "India",
          correct: false,
        },
        {
          text: "China",
          correct: false,
        },
        {
          text: "United States",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: " What is the tallest mountain in the world?",
      answer: [
        {
          text: "Mount Kilimanjaro",
          correct: false,
        },
        {
          text: "Mount Everest",
          correct: true,
        },
        {
          text: "Mount McKinley",
          correct: false,
        },
        {
          text: "Mount Fuji",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: " Who is known as the father of modern physics?",
      answer: [
        {
          text: "Isaac Newton",
          correct: false,
        },
        {
          text: "Galileo Galilei",
          correct: false,
        },
        {
          text: "Albert Einstein",
          correct: true,
        },
        {
          text: "Stephen Hawking",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "What is the largest organ in the human body?",
      answer: [
        {
          text: "Heart",
          correct: false,
        },
        {
          text: "Brain",
          correct: false,
        },
        {
          text: "Skin",
          correct: true,
        },
        {
          text: "Liver",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "Which planet is known for its beautiful ring system?",
      answer: [
        {
          text: "Mars",
          correct: false,
        },
        {
          text: "Jupiter",
          correct: false,
        },
        {
          text: "Saturn",
          correct: true,
        },
        {
          text: "Neptune",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "What is the largest mammal in the world?",
      answer: [
        {
          text: "Blue whale",
          correct: true,
        },
        {
          text: "Giraffe",
          correct: false,
        },
        {
          text: "Polar bear",
          correct: false,
        },
        {
          text: "Elephant",
          correct: false,
        },
      ],
    },
  ];
  const moneyPyramid = useMemo(() =>
   [
    { id: 1, amount: "$ 100" },
    { id: 2, amount: "$ 200" },
    { id: 3, amount: "$ 300" },
    { id: 4, amount: "$ 500" },
    { id: 5, amount: "$ 1000" },
    { id: 6, amount: "$ 2000" },
    { id: 7, amount: "$ 4000" },
    { id: 8, amount: "$ 8000" },
    { id: 9, amount: "$ 16000" },
    { id: 10, amount: "$ 32000" },
    { id: 11, amount: "$ 64000" },
    { id: 12, amount: "$ 125000" },
    { id: 13, amount: "$ 25000" },
    { id: 14, amount: "$ 500000" },
    { id: 15, amount: "$ 1000000" },
  ].reverse(),
[]
);

  useEffect(() =>{
    questionNumber > 1 && setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  },[moneyPyramid, questionNumber]);
  return (
    <>
      <div className="app">
        <div className="main">
          { stop ? (<h1 className="endText">You earned : {earned}</h1>):
           (
            <>
            <div className="top">
            <div className="timer">
              <Timer setStop={setStop} questionNumber={questionNumber}>

              </Timer>
            
              
            </div>
          </div>
          <div className="bottom">
            <Quiz
              data={data}
              setStop={setStop}
              questionNumber={questionNumber}
              setQuestionNumber={setQuestionNumber}
            ></Quiz>
          </div>
          </>
          )}

         
        </div>
        <div className="pyramid">
          <ul className="moneyList">
            {moneyPyramid.map((m) => (
              <li
                className={
                  questionNumber === m.id
                    ? "moneyListItem active"
                    : "moneyListItem"
                }
              >
                <span className="moneyListItemNumber">{m.id}</span>
                <span className="moneyListItemAmount">{m.amount}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
