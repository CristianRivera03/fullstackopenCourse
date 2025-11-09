import { useState } from "react";

const Average = ({data , cantidad}) => {
  if(data == 0){
    return <p>No hay informacion disponible para mostrar</p>
  }else{
    return <p>average {data / cantidad}</p>
  }
}

const Positive = ({good , cantidad}) =>{

  if(good == 0){
    return <p>No hay informacion disponible para mostrar</p>
  }else{
    return <p>positive {(good * 100) / cantidad}</p>
  }

}





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
      average: (clicks.average + 1),
    });
  const handlerButtonNeutral = () =>
    setClicks({
      ...clicks,
      neutral: clicks.neutral + 1,
      allClicks: clicks.allClicks + 1,
      average: (clicks.average + 0) ,
    });
  const handlerButtonBad = () =>
    setClicks({
      ...clicks,
      bad: clicks.bad + 1,
      allClicks: clicks.allClicks + 1,
      average: (clicks.average - 1),
    });

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

      <p>all {clicks.allClicks}</p>
      <Average data = {clicks.average} cantidad = {clicks.allClicks}/>
      <Positive good = {clicks.good} cantidad={clicks.allClicks}/>
    </div>
  );
};

export default App;
