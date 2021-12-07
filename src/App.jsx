import { useState } from "react";
import Quiz from "./components/quiz";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App abs-center">
      
      <Quiz/>
    </div>
  );
}

export default App;
