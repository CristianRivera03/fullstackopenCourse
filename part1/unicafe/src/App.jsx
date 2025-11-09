import { useState } from "react";

const Button = ({ eventHandler, text }) => (
  <button onClick={eventHandler}>{text}</button>
);

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td><td>{value}</td>
  </tr>
);

const Statistics = ({ allClicks, average, good, neutral, bad }) => {
  if (allClicks == 0) {
    return <p>No feedback given</p>;
  } else {
    return (
      <>
        <h1>Statistics</h1>
        <table>
          <tbody>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="all" value={allClicks} />
            <StatisticLine text="average" value={average / allClicks} />
            <StatisticLine
              text="positive"
              value={(good * 100) / allClicks + "%"}
            />
          </tbody>
        </table>
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

      <Button eventHandler={handlerButtonGood} text="Good" />
      <Button eventHandler={handlerButtonNeutral} text="Neutral" />
      <Button eventHandler={handlerButtonBad} text="Bad" />

      <Statistics
        allClicks={clicks.allClicks}
        average={clicks.average}
        good={clicks.good}
        neutral={clicks.neutral}
        bad={clicks.bad}
      />
    </div>
  );
};

export default App;
