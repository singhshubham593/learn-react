import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let [counter,setCounter]=useState(15)
//let counter=15

let addValue=() =>{
  //counter =counter+1
  if(counter===20){
    alert("You cannat go above 20.");
  }else{
  setCounter(counter+1)
  }
  
}
let remove =()=>{
  if(counter===0){
    alert("You cannat go below 20.");
  }else{
  setCounter(counter-1)
  }
}
  return (
    <>
      <h1>Chai or react</h1> 
      <h2>Counter {counter}</h2>
      <button onClick={addValue}>Add counter {counter}</button>
      <button onClick={remove}>Remove counter{counter}</button>
    </>
  )
}

export default App
