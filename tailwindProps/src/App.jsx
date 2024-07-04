import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="bg-green-500 p-4 rounded-xl shadow-lg shadow-white outline outline-white mb-6">Tailwind</h1>
      <div className="flex gap-x-3">
        <Card username="Shubham"  btntxt="Visit me"/> 
        <Card username="Shivam" btntxt="Click me"/>
      </div>
    </>
  )
}

export default App
