import { useRef, useState } from "react";
import AnswerBox from "./AnswerBox";
import { useEffect } from "react";
import Results from "./Results";

function Main({ question, answers }) {
  let initialClass =
    "border-2 rounded-xl p-3 border-gray-500 m-2 bg-transparent text-white placeholder-gray-400";
  let animClass =
    "border-2 rounded-xl p-3 border-gray-500 m-2 bg-transparent text-white placeholder-gray-400 animate-wrong-answer animate-jiggle-jiggle";

  const [userInput, setUserInput] = useState("");
  const [timer, setTimer] = useState(10);
  const [playTimer, setPlayTimer] = useState(true);
  const [inputClass, setInputClass] = useState(initialClass);
  const [score, setScore] = useState(0);
  const [a, setA] = useState("");
  const [resultTab,setResultTab] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    let t = null;

    if (playTimer) {
      t = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
    }

    if (checkTimer()) {
      setPlayTimer(false);
      setTimer(0);
    }

    return () => {
      clearInterval(t);
    };
  }, [timer]);

  const checkTimer = () => {
    if (timer <= 0) {
      return true;
    }
  };

  const checkWrong = () => {
    !answers.some((item) => item.answer.toLowerCase() === a.toLowerCase()) &&
      setInputClass(animClass);
  };

  return (
    <main className="flex flex-col items-center m-12">
      <div className="text-questionTextColor font-bold text-4xl mb-8">-{question}-</div>

      <div className="flex flex-wrap w-[30%] justify-center">
        {answers.map((item) => (
          <AnswerBox
            answer={item.answer}
            userInput={userInput}
            setScore={setScore}
            timer={timer}
            score={score}
          />
        ))}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setUserInput(inputRef.current.value);
          checkWrong();
          inputRef.current.value = "";
        }}
      >
        <input
          className={inputClass}
          placeholder="type here!"
          onChange={(e) => {
            setA(e.target.value);
            setInputClass(initialClass);
          }}
          ref={inputRef}
        />
        <button className="border-2 rounded-xl p-3 border-gray-500 m-2 text-white">
          Ok
        </button>
      </form>
      <div className="text-gray-300">{timer}</div>
      <div className="text-gray-300 text-center w-[35%]">
        {checkTimer() && (
          <button
            onClick={() => {
              setResultTab(true);
            }}
          >
            Show Results
          </button>
        )}
        {resultTab && <Results results={answers} score={score} setResultTab={setResultTab} resultTab={resultTab} />}
      </div>
    </main>
  );
}

export default Main;
