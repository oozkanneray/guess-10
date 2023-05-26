import { useEffect, useRef, useState } from "react";
import GuideCard from "./GuideCard";
import threedotpng from "../assets/threedot.png";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [guide, setGuide] = useState(false);

  let menuRef = useRef(null);

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <div>
      {guide && <GuideCard open={guide} setOpen={setGuide} />}
      <nav className="text-gray-300 bg-black h-14 flex items-center justify-center">
        <h1 class="font-extrabold text-3xl text-white">Guess10</h1>
        <button
          onClick={() => {
            setOpen(true);
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
            <li>Geçmiş Oyunlar</li>
            <li>Yeni Soru Oluştur</li>
            <li>Giriş Yap</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
