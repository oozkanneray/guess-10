import { useState } from "react";

function Navbar() {

  const openClass = "flex justify-center items-center flex-col text-gray-300 absolute h-[100vh] w-[100%] bg-black backdrop-blur-md bg-opacity-10"

  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className={ open ? openClass : "hidden" }>
        <div className="w-96 h-96 bg-black rounded-2xl text-gray-300">
          <button onClick={() => {
            setOpen(false)
          }}>X</button>
        </div>
      </div>
      <nav className="text-gray-300 bg-black h-14 flex items-center">
        <button
          className="text-xl bg-stone-900 rounded-xl w-8 h-8 "
          onClick={() => {
            setOpen(true)
          }}
        >
          ?
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
