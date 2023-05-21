import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const Button = ({handleClick, text}) => {
  return(
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  )
}

const StatisticsLine = ({text, counter}) => {
  return (
   <tr>
     <th>
       {text}
     </th>
     <td>
       {counter}
     </td>
   </tr>
  )
}

const Statistics = ({good, neutral, bad, all, result, percentage}) => {
  return(
  <table>
    <tbody>
      <StatisticsLine text={"Good: "} counter={good}/>
      <StatisticsLine text={"Neutral: "} counter={neutral}/>
      <StatisticsLine text={"Bad: "} counter={bad}/>
      <StatisticsLine text={"All: "} counter={all}/>
      <StatisticsLine text={"Average: "} counter={result}/>
      <StatisticsLine text={"Positive: "} counter={percentage}/>
    </tbody>
  </table>
  )
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [clicks, setClicks] = useState(0)
  const [average, setAverage] = useState(0)

  const result = average / clicks
  const percentage = good * 100 / clicks


  console.log("Total: ", clicks, " Suma de puntos: ", average, " Media: ", result, " Porcentage positivos:", percentage , "%")

  const handleGoodClick = () => {
    //console.log("Press the good button")
    setGood(good+1)
    setClicks( clicks + 1)
    setAverage(average + 1)
  }
  const handleNeutralClick = () => {
    //console.log("Press the neutral button")
    setNeutral(neutral+1)
    setClicks( clicks + 1)
  }
  const handleBadClick = () => {
    //console.log("Press the bad button")
    setBad(bad+1)
    setClicks( clicks + 1)
    setAverage( average -1)
  }

  return(
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={()=> handleGoodClick()} text={"Good"}/>
      <Button handleClick={()=> handleNeutralClick()} text={"Neutral"}/>
      <Button handleClick={()=> handleBadClick()} text={"Bad"}/>
      <h1>Statistics</h1>
      {clicks === 0 ? <p>No feedback given</p>
        : <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          all={clicks}
          result={result}
          percentage={percentage + "%"}
        /> }
    </div>

  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


