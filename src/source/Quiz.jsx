import React, { useEffect, useState } from "react";
// import useSound from "use-sound";
// import true from "./source/true.wav";
// import false from "./source/false.wav";
//  import letsPlay from "assest/kbc.wav";

export default function Quiz({
  data,
  setStop,
  questionNumber,
  setQuestionNumber,
}) {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");
  // const [letsPlay] = useSound("kbc.wav");
  // const [correctAnswer] = useSound(true);
  // const [wrongAnswer] = useSound(false);

  // useEffect(() => {
  //   letsPlay();
  // }, [letsPlay]);

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const handleClick = (a) => {
    setSelectedAnswer(a);
    setClassName("answer active");
    delay(3000, () =>
      setClassName(a.correct ? "answer correct" : "answer wrong")
    );
    delay(6000, () => {
      if (a.correct) {
        setQuestionNumber((prev) => prev + 1);
        setSelectedAnswer(null);
      } else {
        setStop(true);
      }
    });
  };

  return (
    <>
      <div className="quizmania">
        <div className="question">{question?.question}</div>

        <div className="answers">
          {question?.answer.map((a) => (
            <div
              className={selectedAnswer === a ? className : "answer"}
              onClick={() => handleClick(a)}
            >
              {a.text}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
