import Navbar from "./components/Navbar.jsx";
import Main from "./components/Main.jsx";
import supabase from "./createsupabase.jsx";
import { useEffect, useState } from "react";

function App() {
  const [question, setQuestion] = useState();
  const [answers, setAnswers] = useState([]);
  const [current,setCurrent] = useState("1")

  const fetchData = async () => {
    const { data, error } = await supabase
      .from("question1")
      .select("question,answers")
      .eq("id", current);
    if (data) {
      data.map((item) => setQuestion(item.question));
      data.map((item) => setAnswers(item.answers));
    }
  };

  const changeCurrent = (a) => {
    setCurrent(a)
  }

  useEffect(() => {
    fetchData();
  }, [current]);

  return (
    <>
      <Navbar changeCurrent={changeCurrent} />
      <Main answers={answers} question={question} />
    </>
  );
}

export default App;
