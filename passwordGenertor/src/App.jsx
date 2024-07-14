import { useState , useEffect , useCallback , useRef} from 'react'
 
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed,setNumber]= useState(false)
  const [characterAllowed,setChar]=useState(false)
  const [password,setPassword]=useState("")

  return (
    <>
     <h1 className="text-white text-xl ">Password Generator</h1>
    </>
  )
}

export default App
