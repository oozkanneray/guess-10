import { useRef, useState } from "react";
import AnswerBox from "./AnswerBox";
import { useEffect } from "react";
import Results from "./Results";

function Main({ question, answers }) {
  let initialClass =
    "flex items-center border-2 rounded-lg border-gray-400 sm:w-96 w-56 h-12 m-2 bg-transparent text-white placeholder-gray-400";
  let animClass =
    "flex items-center border-2 rounded-lg border-gray-400 sm:w-96 w-56 h-12 m-2 bg-transparent text-white placeholder-gray-400 animate-wrong-answer animate-jiggle-jiggle";

  const [userInput, setUserInput] = useState("");
  const [timer, setTimer] = useState(60);
  const [playTimer, setPlayTimer] = useState(false);
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
  }, [timer,playTimer]);

  const checkTimer = () => {
    if (timer <= 0) {
      return true;
    }
  };

  const checkWrong = () => {
    !answers.some((item) => item.toLowerCase() === a.toLowerCase()) &&
      setInputClass(animClass);
  };

  return (
    <main className="flex flex-col items-center m-12">
      <div className="text-questionTextColor font-bold text-4xl mb-8 text-center">{question}</div>

      <div className="flex justify-center items-center">
        <div className="grid grid-cols-2">
        {answers.map((item) => (
          <AnswerBox
            answer={item}
            userInput={userInput}
            setScore={setScore}
            timer={timer}
            score={score}
          />
        ))}
        </div>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setUserInput(inputRef.current.value);
          checkWrong(); 
          inputRef.current.value = "";
          if(!playTimer) setPlayTimer(true)
        }}
      >
        <div className={inputClass}>
        <input
          className="bg-transparent h-[100%] w-[90%] pl-2"
          placeholder="type here!"
          onChange={(e) => {
            setA(e.target.value);
            setInputClass(initialClass);
          }}
          ref={inputRef}
        />
        <div className="text-gray-300 w-[10%] text-center text-xl text-white/50">{timer}</div>
        </div>
      </form>
      <div className="text-gray-300 text-center w-[35%]">
        {checkTimer() && (
          <button
          className="p-4 text-xl border-2 mt-5 rounded-2xl border-white text-questionTextColor hover:scale-105"
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
