import { useState } from "react";

const App = () => {
  const [clicks, setClicks] = useState({ good: 0, neutral: 0, bad: 0 });
  const handlerButtonGood = () =>
    setClicks({ ...clicks, good: clicks.good + 1 });
  const handlerButtonNeutral = () =>
    setClicks({ ...clicks, neutral: clicks.neutral + 1 });
  const handlerButtonBad = () => setClicks({ ...clicks, bad: clicks.bad + 1 });

  return (
    <div>
      <h1>Give Feedback</h1>

      <button onClick={handlerButtonGood}>Good</button>
      <button onClick={handlerButtonNeutral}>Neutral</button>
      <button onClick={handlerButtonBad}>Bad</button>

      <h1>Statistics</h1>
      <p>good {clicks.good}</p>
      <p>neutral {clicks.neutral}</p>
      <p>bad {clicks.bad}</p>
    </div>
  );
};

export default App;
