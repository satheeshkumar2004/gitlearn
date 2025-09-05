import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

function ok(){

  alert(document.getElementById("ok").value)
}
  return (
    <>
      <div>
        <input id='ok' type='text' placeholder='enter the number'></input>
        <button onClick={ok}>button 4</button>
      </div>
    </>
  )
}

export default App
