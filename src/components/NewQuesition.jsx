import { useEffect, useRef, useState } from "react";
import supabase from "../createsupabase";

function NewQuestion({ addnew, setAddnew }) {
  const openClass =
    "left-0 top-0 absolute flex justify-center items-center flex-col text-gray-300 absolute h-[100vh] w-[100%] bg-black backdrop-blur-md bg-opacity-10 animate-opening";
  const closeAnimClas =
    "left-0 top-0 absolute flex justify-center items-center flex-col text-gray-300 absolute h-[100vh] w-[100%] bg-black backdrop-blur-md bg-opacity-10 animate-closing";

  const [newQuestion ,setNewQuestion] = useState("")

  useEffect(() => { 
    console.log(newQuestion)
  },[newQuestion])
  const quesitonInput = useRef(null)


  return (
    <div className={openClass}>
      <div className="bg-lightCurrentBgColor p-5 rounded-xl">
        <div className="flex justify-between">
          <h1 className="text-questionTextColor text-2xl m-2">
            Yeni Soru Ekle
          </h1>
          <button
            className="m-2"
            onClick={() => {
              setAddnew(false);
            }}
          >
            X
          </button>
        </div>
        <p className="m-2">Yeni Soru Ekleme Yeri Texti</p>
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            setNewQuestion(quesitonInput.current.value)
          }}
        >
          <div className="flex items-center border-2 rounded-lg border-gray-400 sm:w-96 w-56 h-12 m-2 bg-transparent text-white placeholder-gray-400">
          <input
            ref={quesitonInput}
            placeholder="yeni soru..."
            className="bg-transparent w-[85%] p-2"
          />
          <button className="w-[15%] m-2">Gönder</button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default NewQuestion;
