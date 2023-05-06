import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState();

  return (
    <nav className="text-gray-300 bg-black h-14 flex items-center">
      <button
        className="text-xl bg-stone-900 rounded-xl w-8 h-8 "
        onClick={() => {}}
      >
        ?
      </button>
    </nav>
  );
}

export default Navbar;
