import { useEffect, useState } from "react";

function AnswerBox({ answer, userInput,setScore,timer,score}) {
  let initialClass =
    "flex text-3xl text-white border-2 border-gray-400 w-52 h-16 text-center m-4 rounded-xl items-center justify-center p-2";
  let animClass =
    "flex text-3xl text-white border-2 border-gray-400 w-52 h-16 text-center m-4 rounded-xl items-center justify-center animate-already-found";

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
