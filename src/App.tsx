import { useState } from 'react'
import './App.css'

function App() {
  const [] = useState()

  return (
    <div className="calculator">
     <input id="first-input" placeholder="First input" />
     <h1>+</h1>
     <input id="second-input" placeholder="Second input" />
     <button className="button"></button>
     <div className="screen">00.00</div>
    </div>
  )
}

export default App
