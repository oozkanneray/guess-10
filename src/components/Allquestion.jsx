import { useEffect, useState } from "react";
import supabase from "../createsupabase.jsx";

function AllQuestion({ allQuestion, setAllQuestion,changeCurrent }) {
  const [questions, setQuestion] = useState([]);

  useEffect(() => {
    fetchAllQuestions();
  }, []);

  const fetchAllQuestions = async () => {
    const { data, error } = await supabase
      .from("question1")
      .select("question,id");

    if (data) {
      setQuestion(data);
    }
    if (error) console.log(error);
  };

  if (allQuestion) {
    return (
      <div className="text-gray-300 absolute w-[100%] h-[90%] flex justify-center top-14">
        <div className="mt-20 sm:w-[25%] w-[65%] h-[70%] border-white border-2 bg-currentBgColor overflow-auto">
          <div className="flex justify-around mt-8 items-center">
            <div className="text-questionTextColor text-2xl">Bütün Sorular</div>
            <button
              onClick={() => {
                setAllQuestion(false);
              }}
            >
              X
            </button>
          </div>
          <div className="m-5 text-md flex flex-col justify-center items-center">
            {questions.map((item) => (
              <div
                onClick={() => {
                    changeCurrent(item.id.toString())
                    setAllQuestion(false)
                }}
                className="flex items-center sm:mt-2 mt-4 w-full rounded-xl h-10 text-center hover:bg-white/10"
              >
                <div className="ml-2">{item.id}</div>
                <div className="ml-10">{item.question} </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  } else return null;
}

export default AllQuestion;
