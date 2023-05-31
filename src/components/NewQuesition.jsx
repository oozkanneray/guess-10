import { useEffect, useRef, useState } from "react";
import supabase from "../createsupabase";
import githubPng from "../assets/githubPng.png";

function NewQuestion({ user, addNew, setAddNew }) {
  const openClass =
    "left-0 top-0 absolute flex justify-center items-center flex-col text-gray-300 absolute h-[100vh] w-[100%] bg-black backdrop-blur-md bg-opacity-10 animate-opening";
  const closeAnimClas =
    "left-0 top-0 absolute flex justify-center items-center flex-col text-gray-300 absolute h-[100vh] w-[100%] bg-black backdrop-blur-md bg-opacity-10 animate-closing";

  const [newQuestion, setNewQuestion] = useState("");

  const login = async () => {
    const { data, session, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
    });
  };

  const insertData = async () => {
    const { error } = await supabase
      .from("newQuestion")
      .insert({
        question: newQuestion,
        userName: user.name,
        userImg: user.avatar_url,
      });
  };

  const handleTimer = () => {
    setTimeout(() => {
      setAddNew(false);
    }, 500);
  };

  useEffect(() => {
    if(newQuestion != ""){
      insertData()
    }
  }, [newQuestion]);

  const quesitonInput = useRef(null);
  if (!user) {
    return (
      <div className={openClass}>
        <div className="bg-lightCurrentBgColor p-10 rounded-xl flex flex-col justify-center items-center">
          <div className="flex items-center justify-around w-52">
            <p className="text-2xl text-questionTextColor">Giriş Yap</p>
            <button
              className="m-2"
              onClick={() => {
                setAddNew(false);
              }}
            >
              X
            </button>
          </div>
          <button
            className="flex border-4 border-gray-300 mt-3 p-5 rounded-xl font-bold text-xl"
            onClick={login}
          >
            {" "}
            <img className="w-5" src={githubPng} alt="" /> Github ile Giriş Yap
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className={openClass}>
      <div className="bg-lightCurrentBgColor p-5 rounded-xl">
        <div className="flex justify-between">
          <h1 className="text-questionTextColor text-2xl m-2">Hoş Geldin!</h1>
          <button
            className="m-2"
            onClick={() => {
              setAddNew(false);
            }}
          >
            X
          </button>
        </div>
        <p className="m-2">Öneri sorunu aşşağı kısıma yazabilirsin.</p>
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            setNewQuestion(quesitonInput.current.value);
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
