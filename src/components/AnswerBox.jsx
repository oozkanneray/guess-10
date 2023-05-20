import { useEffect, useState } from "react";

function AnswerBox({ answer, userInput,setScore,timer,score}) {
  let initialClass =
    "flex sm:text-3xl text-xl text-white border-2 border-gray-400 sm:w-52 w-28 sm:h-12 h-10 text-center m-5 rounded-xl items-center justify-center";
  let animClass =
    "flex sm:text-3xl text-xl text-white border-2 border-gray-400 sm:w-52 w-28 sm:h-12 h-10 text-center m-5 rounded-xl items-center justify-center animate-already-found";

  const [find, setFind] = useState(false);
  const [founded, setFounded] = useState(initialClass);

  useEffect(() => {
    checkAnser();
  }, [userInput]);

  const updateScore = () => {
    let changeScore = score + (timer * 10)
    setScore(changeScore)
  }

  const checkAnser = () => {
    if (userInput.toLowerCase() === answer.toLowerCase()) {
      setFind(true);
      setFounded(animClass);
      updateScore()
    }
  };

  return (
    <div className={founded}>{find ? <div>{answer}</div> : <div>?</div>}</div>
  );
}

export default AnswerBox;
