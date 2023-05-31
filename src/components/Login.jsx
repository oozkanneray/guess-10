import githubPng from "../assets/githubPng.png";

const login = async () => {
    const { data, session, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
    });
  };

function Login({setAddNew}) {
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

export default Login;
