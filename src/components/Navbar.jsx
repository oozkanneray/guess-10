import { useState } from "react";

function Navbar() {
  const openClass ="absolute flex justify-center items-center flex-col text-gray-300 absolute h-[100vh] w-[100%] bg-black backdrop-blur-md bg-opacity-10 animate-opening";
  const closeAnimClas = "absolute flex justify-center items-center flex-col text-gray-300 absolute h-[100vh] w-[100%] bg-black backdrop-blur-md bg-opacity-10 animate-closing"
  
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className={open ? openClass : closeAnimClas}>
        <div className="w-96 bg-currentBgColor rounded-2xl text-gray-300 shadow-lg shadow-black p-5">
          <div className="flex justify-around m-4">
            <h4 className="text-4xl">Guess10</h4>
          <button
          className="text-xl"
            onClick={() => {
              setOpen(false);
            }}
          >
            X
          </button>
          </div>
          <div className="flex flex-col text-lg py-5">
            <p className="mb-4">Size verilen soruyu 60 saniye içerisinde ne kadar cevaplarsanız o kadar puan alırsınız.</p>
            <p className="mb-4">Kalan sürenizin kaç olduğuna bağlı olarak puan kazanırsınız. (Kalan süre * 10) </p>
            <p className="mb-4">Eğer süreniz biterse puan alamazsınız fakat cevapları tahmin etmeye devam edebilirsiniz. </p>
            <p className="mb-4">Doyasıya eğlenmeye bakın nasıl olsa ana amaç puan almak değil...</p>
          </div>
        </div>
      </div>
      <nav className="text-gray-300 bg-black h-14 flex items-center">
        <button
          className="text-xl bg-stone-900 rounded-xl w-8 h-8 "
          onClick={() => {
            setOpen(true);
          }}
        >
          ?
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
