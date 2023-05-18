import Navbar from "./components/Navbar.jsx";
import Main from "./components/Main.jsx";
import supabase from "./createsupabase.jsx";
import { useEffect, useState } from "react";

function App() {
  const [question, setQuestion] = useState();
  const [answers, setAnswers] = useState([]);

  const fetchData = async () => {
    const { data, error } = await supabase.from("question1").select("question,answers").eq("id","2");
    if(data){
      data.map(item => setQuestion(item.question))
      data.map(item => setAnswers(item.answers))
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
        <Main answers={answers} question={question} />
    </>
  );
}

export default App;
