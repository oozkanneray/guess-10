import { useEffect, useState } from "react";

function AnswerBox({ answer, userInput }) {
  const [find, setFind] = useState(false);

  useEffect(() => {
    checkAnser();
  }, [userInput]);

  const checkAnser = () => {
    if (userInput.toLowerCase() == answer.toLowerCase()) setFind(true);
  };

  return (
    <div className="text-2xl text-gray-300">
      {find ? <div>{answer}</div> : <div>?</div>}
    </div>
  );
}

export default AnswerBox;
