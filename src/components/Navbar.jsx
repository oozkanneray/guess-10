import { useState } from "react";
import githubPng from "../assets/githubPng.png";
import GuideCard from "./GuideCard";

function Navbar() {


  const [open, setOpen] = useState(true);

  return (
    <div>
      <GuideCard open={open} setOpen={setOpen}/>
      <nav className="text-gray-300 bg-black h-14 flex items-center">
        <button
          className="text-xl bg-stone-900 rounded-xl w-8 h-8 "
          onClick={() => {
            setOpen(true);
          }}
        >
          ?
        </button>
        <div className="text-xl bg-stone-900 rounded-xl w-8 h-8 flex items-center justify-center text-center mx-3">
          <a href="https://github.com/oozkanneray/guess-10"><img className="text-xlrounded-xl w-6 h-6" src={githubPng}></img></a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
