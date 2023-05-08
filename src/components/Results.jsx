import { useEffect, useState } from "react";

function Results({ results, score }) {
  const [point, setPoint] = useState(0);

  useEffect(() => {
    let t = setInterval(() => {
      setPoint(point + 1);
    }, 10);

    if (point >= score) {
      setPoint(score);
      clearInterval(t);
    }

    return () => {
      clearInterval(t);
    };
  }, [point]);

  return (
    <div className="flex flex-col border-2 rounded-xl justify-evenly">
      <div className="flex text-4xl font-bold justify-around">
        <div className="underline underline-offset-4">Answers</div>
        <div className="underline underline-offset-4">Score</div>
      </div>
      <div className="flex justify-around">
        <div className="grid grid-rows-5 grid-cols-2 font-bold p-4 w-80 ">
          {results.map((item) => (
            <div className="m-2 text-3xl">{item}</div>
          ))}
        </div>
        <div className="flex flex-col text-center text-4xl font-bold items-center justify-center">
          <div className="w-72">{point}</div>
        </div>
      </div>
    </div>
  );
}

export default Results;
