import { useEffect, useState } from "react";

function AnswerBox({ answer, userInput }) {
  let initialClass =
    "text-3xl text-gray-300 border-2 border-gray-300 w-44 h-12 text-center m-2 rounded-xl";
  let animClass =
    "text-3xl text-gray-300 border-2 border-gray-300 w-44 h-12 text-center m-2 rounded-xl animate-already-found";

  const [find, setFind] = useState(false);
  const [founded, setFounded] = useState(initialClass);

  useEffect(() => {
    checkAnser();
  }, [userInput]);

  const checkAnser = () => {
    if (userInput.toLowerCase() === answer.toLowerCase()) {
      setFind(true);
      setFounded(animClass);
    }
  };

  return (
    <div className={founded}>{find ? <div>{answer}</div> : <div>?</div>}</div>
  );
}

export default AnswerBox;
