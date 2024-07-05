import { useState } from "react"

function App() {
  const[color,setColor]=useState("olive")
   
  return (
    <div className="w-screen h-screen duration-200" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center items-center bg-white  text-black gap-x-8 bottom-6 px-8 mx-96 rounded-xl">
       <button  onClick={()=> setColor("red")} className=" text-black m-2 font-bold" style={{backgroundColor: "red"}}>red</button>
       <button onClick={()=> setColor("blue")} className=" text-black m-2 font-bold" style={{backgroundColor: "blue"}}>blue</button>
       <button onClick={()=> setColor("pink")} className=" text-black m-2 font-bold" style={{backgroundColor: "pink"}}>pink</button>
       <button onClick={()=> setColor("green")} className=" text-black m-2 font-bold" style={{backgroundColor: "green"}}>green</button>
      </div>
    </div>
  )
}

export default App
