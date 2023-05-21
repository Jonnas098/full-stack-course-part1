import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css'

//Componentes de la primera parte
const Header = ({ course, fecha }) => {
  console.log(course, fecha)
  return (
    <>
      <h1>{course}</h1>
      <p>{fecha}</p>
    </>
  );
};

const Content = ({parts}) => {
  return (
    <>
      {parts.map((value, index) => (
        <Part key={index} part={value.name} excercises={value.excercises}/>
      ))}
    </>
  );
};

const Part = ({ part, excercises }) => {
  console.log(part, excercises)
  return(
    <div className="carta">
      <p>{part}</p>
      <p>{excercises}</p>
    </div>
  )
};

const Total = (props) => {
  
  console.log(props)
  return (
    <>
      <p>Total courses {props.total}</p>
    </>
  );
};

//Componentes de la segunda parte

const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age

  return (
    <>
      <p>Hello {name}, you are {age} years old</p>
      <p>You probably born in {bornYear()}</p>
    </>
  );
}


// const Button = ({ text, handleClick }) => {
//   return(
//     <button onClick={handleClick}>
//       {text}
//     </button>
//   )
// }

const History = ({ allClicks }) => {
  if(allClicks.length === 0){
    return(
      <>
        <p>The app is used by pressing the buttons</p>
      </>
    )
  }
  return(
    <>
      <p>Button press history: {allClicks.join(" ")}</p>
    </>
  )
}

const Display = ({ value }) => <div>{value}</div>

const Button = ({ text, handleClick }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  // const course = {
  //   name: "Half Stack application development",
  //   fecha: new Date(),
  //   parts: [
  //     {
  //       name: "Fundamentals of React",
  //       excercises: 10
  //     },
  //     {
  //       name: "Using props to pass data",
  //       excercises: 7
  //     },
  //     {
  //       name: "State of a component",
  //       excercises: 14
  //     },
  //   ]
  // }
   

  // let tot = 0
  // for (let i = 0; i < course.parts.length; i++) {
  //   tot += course.parts[i].excercises;
  // }
  
  // return (
  //   <>
  //     <Header course={course.name} fecha={course.fecha.toString()}/>
  //     <Content parts={course.parts}/>
  //     <Total total={tot}/>
  //   </>
  // );

  //Destructurando props \\ ver componente <Hello/>
  
//   const name = "default"
//   const age = 0.1
  
//   return(
//     <div>
//       <h1>Greeings</h1>
//       <Hello name="John Navarro" age={24}/>
//       <Hello name={name} age={age}/>
//     </div>
//   );
// }

//Renderizando automaticamente un componente de la manera antigua

//   const { counter } = props
 
//   return(
//     <div>
//       {counter}
//     </div>
//   )
// }

// let counter = 1

// const refresh = () => {
//   ReactDOM.render(
//     <App counter={counter}/>,
//     document.getElementById('root'))
// }

// setInterval(()=>{
//   refresh()
// counter+=1
// }, 1000)

  const [ counter, setCounter ] = useState(0)
  const [fecha, setFecha] = useState(0)

  setTimeout(()=> setFecha(Date()), 1000)
  const increaseByOne = () => setCounter(counter + 1)
  const setToZero = () => setCounter(0)
  const decreaseByOne = () => setCounter(counter - 1)

  //console.log("...rendering", counter)

  return(
    <div>
      {fecha} <br/>
      <Button handleClick={decreaseByOne} text={"Minus"}/>
      <Button handleClick={setToZero} text={"Zero"}/>
      <Button handleClick={increaseByOne} text={"Plus"}/>
      {/*<Display counter={counter}/>*/}
    </div>
  )

}

const App2 = () => {
  // const [clicks, setClicks] = useState({
  //   left: 0,
  //   right: 0
  // })
  // const handleLeftClick = () => {
  //    const newClicks = {
  //      ...clicks,
  //      left: clicks.left + 1,
  //    }
  //   setClicks({...clicks, left: clicks.left + 1})
  // }

  // const handleRightClick = () => {
  //   setClicks({...clicks, right: clicks.right + 1})
  // }

  // const [left, setLeft] = useState(0)
  // const [right, setRight] = useState(0)
  // const [allClicks, setAll] = useState([])
  //
  // const handleLeftClick = () => {
  //   setAll(allClicks.concat('L'))
  //   setLeft(left + 1)
  // }
  //
  // const handleRightClick = () => {
  //   setAll(allClicks.concat('R'))
  //   setRight(right + 1)
  // }
  //
  // return(
  //   <div>
  //     {left}
  //     <ButtonNumber onClick={handleLeftClick} text="left"/>
  //     <ButtonNumber onClick={handleRightClick} text="right"/>
  //     {right}
  //     <History allClicks={allClicks}/>
  //   </div>
  // )
    const [value, setValue] = useState(10)

    const setToValue = (newValue) => {
        setValue(newValue)
    }

    return(
        <div>
            <Display value={value}/>
            <Button handleClick={() => setToValue(1000)} text={"Thousand"}/>
            <Button handleClick={() => setToValue(0)} text={"Reset"}/>
            <Button handleClick={() => setToValue(value + 1)} text={"Increment"}/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App2/>);
