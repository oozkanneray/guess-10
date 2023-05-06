import data from "./data.jsx"
import Navbar from "./components/Navbar.jsx";
import Main from "./components/Main.jsx";


function App() {



  return (
      <>
      <Navbar/>
      {data.map(item => <Main answers={item.answers} question={item.question}/>)}
      </>
  );
}

export default App;
