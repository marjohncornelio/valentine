import { useState } from "react";
import "./App.css";
import LottieAnimation from "./LottieAnimation";
import valentine from "./animation/valentine.json";
import sure from "./animation/sure.json";
import reject from "./animation/reject.json";

function App() {
  const [answer, setAnswer] = useState("");

  return (
    <div>
      <LottieAnimation
        lotti={answer === "" ? valentine : answer === true ? sure : reject}
        height={300}
        width={300}
      />
      <h2>Will you be my Valentine?</h2>
      <div className="button">
        <button onClick={() => setAnswer(true)}>Sure</button>
        <button onClick={() => setAnswer(false)}>No</button>
      </div>
    </div>
  );
}

export default App;
