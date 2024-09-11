import { useState } from 'react'
import './App.css'
import { Input } from './components/Input'
import { Button } from './components/Button'
import { Screen } from './components/Screen'

function App() {
  const [firstInput, setFirstInput] = useState<string>('')
  const [secondInput, setSecondInput] = useState<string>('')
  const [result, setResult] = useState<number | null>(null)

  const addNumbers = (a:string, b:string) => {
    const num1 = parseInt(a)
    const num2 = parseInt(b)
    setResult(num1 + num2)
  }

  return (
    <div className="calculator">
     <Input value={firstInput} onChange={setFirstInput} placeholder="First input"></Input>
     <h1>+</h1>
     <Input value={secondInput} onChange={setSecondInput} placeholder="Second input"></Input>
     <Button onClick={() => addNumbers(firstInput, secondInput)} />
     <Screen result={result} />
    </div>
  )
}

export default App
