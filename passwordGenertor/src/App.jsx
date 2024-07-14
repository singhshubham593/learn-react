import { useState , useEffect , useCallback , useRef} from 'react'
 
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed,setNumber]= useState(false)
  const [characterAllowed,setChar]=useState(false)
  const [password,setPassword]=useState("")

  const passwordref=useRef(null)

  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="asdfghjklpoiuytrewqzxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM"
    if(numberAllowed) str +="0123456789"
    if(characterAllowed) str +="#$&*"

    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random()*str.length+1)
      pass +=str.charAt(char)
    }
    setPassword(pass)
  },[length, numberAllowed, characterAllowed, setPassword])

  const copypasswordtoClick=useCallback(()=>{
    passwordref.current?.select()
    passwordref.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password)
  },[])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, characterAllowed, passwordGenerator])


  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg bg-gray-600 px-4 py-3 my-8 text-blue-400 font-bold">
        <h1 className="text-white text-center my-3 text-2xl">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input 
            type="text"
            value={password}
            className="outline-none w-full px-3 py-1"
            placeholder='password'
            readOnly
            ref={passwordref}
          />
          <button onClick={copypasswordtoClick} className="outline-none text-white bg-blue-500  text-xl px-3 py-0.5 shrink-0">copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input 
              type='range'
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e)=>{setLength(e.target.value)}}
            />
            <label >length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
              type="checkbox"
              defaultChacked={numberAllowed}
              id='numberInput'
              onChange={()=>{
                setNumber((prev) =>!prev)
              }}
            />
            <label htmlFor="numberInput">number</label>

          </div>
          <div className="flex items-center gap-x-1">
            <input 
              type="checkbox"
              defaultChecked={characterAllowed}
              id='charactorInput'
              onChange={()=>{
                setChar((prev) => !prev)
              }}
            />
            <label htmlFor="charactorInput">charactor</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
