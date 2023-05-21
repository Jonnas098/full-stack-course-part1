import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const anecdotes = [
  'First phrase', 'Second Phrase', 'Third pharse', 'Fourth phrase', '', "Fifth phrase", "Sixth phrase"
]
const points = new Array(anecdotes.length).fill(0)

const Btn = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const Display = ({ title, phrase, votes }) => {
  return(
    <>
      <h1>{title}</h1>
      <p>{phrase}</p>
      <p>{votes}</p>
    </>
  )
}

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(points)
  const [index, setIndex] = useState(-1)

  const mayor = Math.max(...votes)
  const newIndex = votes.findIndex((e) => e === mayor)

  if(newIndex !== index){
    setIndex(newIndex)
  }

  const phrase = () => setSelected(Math.floor(Math.random()* anecdotes.length))

  const vote = () => {
    setVotes(prevState => {
      const copy = [...prevState];
      copy[selected] += 1;
      return copy
    })
  }

  console.log(votes)
  console.log(mayor)
  console.log(index)

  return(
    <div>
      <Display title={"Phrase of the day"} phrase={anecdotes[selected]} votes={`Has ${votes[selected]} votes`} />
      <Btn handleClick={()=>vote()} text={"Vote"}/>
      <Btn handleClick={()=>phrase()} text={"Next Phrase"}/>
      {mayor === 0
      ? <Display title={"Phrase with the most votes"} phrase={"Vote to see a most voted phrase"}/>
      : <Display title={'Phrase with the most votes'} phrase={anecdotes[index]}/>}
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App anecdotes={anecdotes}/>);


