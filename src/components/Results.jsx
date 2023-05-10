import { useEffect, useState } from "react";

function Results({ results, score, setResultTab, resultTab }) {
  const openClass =
    "left-0 top-0 absolute flex justify-center items-center flex-col text-gray-300 absolute h-[100vh] w-[100%] bg-black backdrop-blur-md bg-opacity-10 animate-opening";
  const closeAnimClas =
    "left-0 top-0 absolute flex justify-center items-center flex-col text-gray-300 absolute h-[100vh] w-[100%] bg-black backdrop-blur-md bg-opacity-10 animate-closing";

  const [point, setPoint] = useState(0);
  const [style, setStyle] = useState(openClass);

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
  }, [point, resultTab]);

  const handleTimer = () => {
    setStyle(closeAnimClas)
    setTimeout(() => {
      setResultTab(false)
    }, 500);
  };

  return (
    <div className={style}>
      <div className="bg-lightCurrentBgColor rounded-2xl text-gray-300 p-14">
        <button
          onClick={() => {
            handleTimer();
          }}
        >
          X
        </button>
      </div>
    </div>
  );
}

export default Results;
