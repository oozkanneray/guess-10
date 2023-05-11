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
    }, 1);

    if (point >= score) {
      setPoint(score);
      clearInterval(t);
    }
    return () => {
      clearInterval(t);
    };
  }, [point, resultTab]);

  const handleTimer = () => {
    setStyle(closeAnimClas);
    setTimeout(() => {
      setResultTab(false);
    }, 500);
  };

  return (
    <div className={style}>
      <div className="bg-lightCurrentBgColor rounded-2xl text-gray-300 p-16">
        <div className="flex">
          <div className="flex flex-col">
            <div className="text-4xl mb-5">Cevaplar</div>
            {results.map((item) => (
              <div className="flex border-b">
                <div className="mt-2 w-24 text-left">{item.answer}</div>
                <div className="m-2 text-questionTextColor">{item.info}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center justify-center text-6xl ml-16">
            <div className="text-4xl">Skor</div>
            <div className="m-3 text-questionTextColor border-t-2 w-24">
              {point}
            </div>
          </div>
          <button
            className="flex items-start text-questionTextColor h-2"
            onClick={() => {
              handleTimer();
            }}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
}

export default Results;
