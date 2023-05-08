import { useRef, useState } from "react";
import AnswerBox from "./AnswerBox";
import { useEffect } from "react";
import Results from "./Results";

function Main({ question, answers }) {
  let initialClass =
    "border-2 rounded-xl p-3 border-gray-300 m-2 bg-transparent text-gray-300 placeholder-gray-400";
  let animClass =
    "border-2 rounded-xl p-3 border-gray-300 m-2 bg-transparent text-gray-300 placeholder-gray-400 animate-wrong-answer animate-jiggle-jiggle";

  const [userInput, setUserInput] = useState("");
  const [timer, setTimer] = useState(10);
  const [playTimer, setPlayTimer] = useState(true);
  const [inputClass, setInputClass] = useState(initialClass);
  const [score,setScore] = useState(0)
  const [a, setA] = useState("");
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
    !answers.some((item) => item.toLowerCase() === a.toLowerCase()) &&
      setInputClass(animClass);
  };

  return (
    <main className="flex flex-col items-center m-12">
      <div className="text-gray-300 font-bold text-4xl mb-8">-{question}-</div>

      <div className="flex flex-wrap w-[25%] justify-center">
        {answers.map((item) => (
          <AnswerBox answer={item} userInput={userInput} setScore={setScore} timer={timer} score={score} />
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
        <button className="border-2 rounded-xl p-3 border-gray-300 m-2 text-gray-300">
          Ok
        </button>
      </form>
      <div className="text-gray-300">{timer}</div>
      <div className="text-gray-300 text-center w-[35%]">
        {/* {checkTimer() && <Results results={answers} score={score} />} */}
      </div>
    </main>
  );
}

export default Main;
