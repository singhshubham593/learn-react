import Chai from "./chai" 

//{} = called evaluated Expression means outcome of expression
function App() {
  const username="take extra chai"
  return (
    <div>
      <h1>chai or code with vite {username}</h1> /* {}= it use to treat as variable or final outcome of a variable */
      <Chai/>
      <h3>how is tea?</h3>
      <Chai/>  
    </div>
  )
}

export default App
