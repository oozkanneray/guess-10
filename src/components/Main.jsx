import { useRef, useState } from "react";
import AnswerBox from "./AnswerBox";

function Main({ question, answers }) {
  const [userInput, setUserInput] = useState("");
    const inputRef = useRef(null);

  return (
    <main>
      <div className="text-gray-300">{question}</div>
      {answers.map((item) => (
        <AnswerBox answer={item} userInput={userInput} />
      ))}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setUserInput(inputRef.current.value);
          inputRef.current.value = "";
        }}
      >
        <input
          className="border-2 rounded-xl p-3 border-gray-300 m-2 bg-transparent text-gray-300 placeholder-gray-400"
          placeholder="type here!"
          ref={inputRef}
        />
        <button className="border-2 rounded-xl p-3 border-gray-300 m-2 text-gray-300">
          Ok
        </button>
      </form>
    </main>
  );
}

export default Main;
