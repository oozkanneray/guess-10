import { useState } from "react";

function NewQuestion() {
  const openClass =
    "left-0 top-0 absolute flex justify-center items-center flex-col text-gray-300 absolute h-[100vh] w-[100%] bg-black backdrop-blur-md bg-opacity-10 animate-opening";
  const closeAnimClas =
    "left-0 top-0 absolute flex justify-center items-center flex-col text-gray-300 absolute h-[100vh] w-[100%] bg-black backdrop-blur-md bg-opacity-10 animate-closing";

  const [style, setStyle] = useState();

  return (
    <div className={openClass}>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
        }}
      ></form>
    </div>
  );
}

export default NewQuestion;
