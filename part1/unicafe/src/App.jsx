import { useState } from "react";


const Statistics = ({ allClicks, average, good }) => {
  if (allClicks == 0) {
    return <p>No hay informacion para mostrar</p>;
  } else {
    return (
      <>
        <h1>Statistics</h1>
        <p>all {allClicks}</p>
        <p>average {average / allClicks}</p>
        <p>positive {(good * 100) / allClicks}%</p>
      </>
    );
  }
};


const App = () => {
  const [clicks, setClicks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    allClicks: 0,
    average: 0,
  });
  const handlerButtonGood = () =>
    setClicks({
      ...clicks,
      good: clicks.good + 1,
      allClicks: clicks.allClicks + 1,
      average: clicks.average + 1,
    });
  const handlerButtonNeutral = () =>
    setClicks({
      ...clicks,
      neutral: clicks.neutral + 1,
      allClicks: clicks.allClicks + 1,
      average: clicks.average + 0,
    });
  const handlerButtonBad = () =>
    setClicks({
      ...clicks,
      bad: clicks.bad + 1,
      allClicks: clicks.allClicks + 1,
      average: clicks.average - 1,
    });

  return (
    <div>
      <h1>Give Feedback</h1>

      <button onClick={handlerButtonGood}>Good</button>
      <button onClick={handlerButtonNeutral}>Neutral</button>
      <button onClick={handlerButtonBad}>Bad</button>


      <p>good {clicks.good}</p>
      <p>neutral {clicks.neutral}</p>
      <p>bad {clicks.bad}</p>

      <Statistics allClicks={clicks.allClicks} average={clicks.average} good={clicks.good} />
    </div>
  );
};

export default App;
