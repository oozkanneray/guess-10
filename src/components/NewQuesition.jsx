import { useEffect, useRef, useState } from "react";
import supabase from "../createsupabase";
import Login from "./Login";
import greenHeart from "../assets/greenHeart.png"

function NewQuestion({ user, setAddNew }) {
  const openClass =
    "left-0 top-0 absolute flex justify-center items-center flex-col text-gray-300 absolute h-[100vh] w-[100%] bg-black backdrop-blur-md bg-opacity-10 animate-opening";

  const [newQuestion, setNewQuestion] = useState("");
  const [isSend, setIsSend] = useState(true);

  const insertData = async () => {
    const { error } = await supabase.from("newQuestion").insert({
      question: newQuestion,
      userName: user.name,
      userImg: user.avatar_url,
    });
  };

  useEffect(() => {
    if (newQuestion != "") {
      insertData();
    }
  }, [newQuestion]);

  const quesitonInput = useRef(null);
  if (!user) {
    return <Login setAddNew={setAddNew} />;
  }
  return (
    <div className={openClass}>
      <div className="bg-lightCurrentBgColor p-5 rounded-xl">
        <div className="flex justify-between">
          <h1 className="text-questionTextColor text-2xl m-2">
            {isSend ? "Hoş Geldin!" : "Teşekkürler!!"}
          </h1>
          <button
            className="m-2"
            onClick={() => {
              setAddNew(false);
            }}
          >
            X
          </button>
        </div>
        <p className="m-2">
          {isSend
            ? "Öneri sorunu aşşağı kısıma yazabilirsin."
            : <div className="text-xl">Katkın için bolca teşekkürler...!</div>}
            {!isSend && <img src={greenHeart}></img>}
        </p>
        {isSend ? (
          <form
            action=""
            onSubmit={(e) => {
              e.preventDefault();
              setNewQuestion(quesitonInput.current.value);
              quesitonInput.current.value = "";
              setIsSend(false)
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
        ) : null}
      </div>
    </div>
  );
}

export default NewQuestion;
