import { useEffect, useRef, useState } from "react";
import GuideCard from "./GuideCard";
import threedotpng from "../assets/threedot.png";
import AllQuestion from "./Allquestion";
import NewQuestion from "./NewQuesition";
import supabase from "../createsupabase";

function Navbar({ changeCurrent }) {
  const [open, setOpen] = useState(false);
  const [guide, setGuide] = useState(false);
  const [allQuestion, setAllQuestion] = useState(false);
  const [addNew, setAddNew] = useState(false);
  const [user,setUser] = useState()
 
  let menuRef = useRef(null);

  const userData = async () => {
    const { data, error } = await supabase.auth.getUser();
    if (data) {
      setUser(data.user.user_metadata);
    }
  };


  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    userData()

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <div>
      {guide && <GuideCard open={guide} setOpen={setGuide} />}

      <AllQuestion
        allQuestion={allQuestion}
        setAllQuestion={setAllQuestion}
        changeCurrent={changeCurrent}
      />
      {addNew && <NewQuestion user={user} setAddNew={setAddNew} addNew={addNew} />}
      <nav className="text-gray-300 bg-black h-14 flex items-center justify-center">
        <h1 className="font-extrabold text-3xl text-white">Guess10</h1>
        <button
          onClick={() => {
            setOpen(true);
            setGuide(false);
            setAllQuestion(false);
          }}
        >
          <img
            src={threedotpng}
            className="w-7 h-7 ml-2 text-gray-300"
            alt=""
          />
        </button>
        <div
          ref={menuRef}
          className={
            open
              ? "w-40 absolute bg-lightCurrentBgColor top-14 rounded-xl ml-72"
              : "hidden"
          }
        >
          <ul className="text-center  flex flex-col justify-center items-center">
            <li
              onClick={() => {
                setGuide(true);
                setOpen(false);
              }}
            >
              Nasıl Oynanır?
            </li>
            <li
              onClick={() => {
                setAllQuestion(true);
                setOpen(false);
              }}
            >
              Geçmiş Oyunlar
            </li>
            <li
              onClick={() => {
                setAddNew(true);
                setOpen(false);
              }}
            >
              Yeni Soru Oluştur
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
