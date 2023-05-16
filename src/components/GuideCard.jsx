function GuideCard({ open, setOpen }) {
  const openClass =
    "absolute flex justify-center items-center flex-col text-gray-400 absolute h-[100vh] w-[100%] bg-black backdrop-blur-md bg-opacity-10 animate-opening";
  const closeAnimClas =
    "absolute flex justify-center items-center flex-col text-gray-400 absolute h-[100vh] w-[100%] bg-black backdrop-blur-md bg-opacity-10 animate-closing";

  return (
    <div className={open ? openClass : closeAnimClas}>
      <div className="bg-lightCurrentBgColor rounded-2xl text-gray-300 p-14 flex flex-col justify-center">
        <div className="flex justify-around">
          <h4 className="text-4xl mb-4 text-questionTextColor">Guess10</h4>
          <button
            className="text-xl"
            onClick={(e) => {
              setOpen(false);
            }}
          >
            X
          </button>
        </div>
        <div className="flex flex-col text-lg py-5">
          <p className="mb-4">
            Size verilen soruyu{" "}
            {<span className="text-questionTextColor">60 saniye</span>}{" "}
            içerisinde ne kadar cevaplarsanız o kadar puan alırsınız.
          </p>
          <p className="mb-4">İlk cevabı girdiğinizde süre başlar</p>
          <p className="mb-4">
            Kalan sürenizin kaç olduğuna bağlı olarak puan kazanırsınız.{" "}
            {<span className="text-questionTextColor">(Kalansüre * 10)</span>}
          </p>
          <p className="mb-4">
            Eğer süreniz biterse puan alamazsınız fakat cevapları tahmin etmeye
            devam edebilirsiniz.{" "}
          </p>

          <p className="mb-4">
            Doyasıya eğlenmeye bakın nasıl olsa ana amaç puan almak değil...
          </p>
        </div>
      </div>
    </div>
  );
}

export default GuideCard;
