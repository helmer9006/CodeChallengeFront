import { useState } from "react";
import useRequest from "./components/hook/useRequest";
import Inicio from "./components/inicio";
import Quiz from "./components/Quiz";


function App() {
  const amount = 10;
  const difficulty = "hard";
  const type = "boolean";
  const [onBegin, setOnBegin] = useState(false);

  const  questions = useRequest(
    `amount=${amount}&difficulty=${difficulty}&type=${type}`
  );

  const handleOnClick = (e) => {
    setOnBegin(true);
  };

  return (
    <div className="container abs-center">
      {onBegin ? <Quiz questions = {questions}/> : <Inicio onSelectBegin={handleOnClick} />}
    </div>
    // {/* <Quiz/> */}
  );
}

export default App;
