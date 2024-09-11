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

  const subtractNumbers = (a:string, b:string) => {
    const num1 = parseInt(a)
    const num2 = parseInt(b)
    setResult(num1 - num2)
  }

  const multiplyNumbers = (a:string, b:string) => {
    const num1 = parseInt(a)
    const num2 = parseInt(b)
    setResult(num1 * num2)
  }

  const divideNumbers = (a:string, b:string) => {
    const num1 = parseInt(a)
    const num2 = parseInt(b)
    setResult(num1 / num2)
  }

  return (
    <div className="w-full lg:w-1/4 md:w-1/3 rounded-xl m-[auto] m-4 p-8 bg-white flex flex-col items-center justify-center ">
     <h1 className="text-3xl font-bold font-mono mb-8">Calculator</h1>
     <Input value={firstInput} onChange={setFirstInput} placeholder="First input"></Input>
     <Input value={secondInput} onChange={setSecondInput} placeholder="Second input"></Input>
     <div className="flex flex-row">
      <Button onClick={() => addNumbers(firstInput, secondInput)} operant="+"/>
      <Button onClick={() => subtractNumbers(firstInput, secondInput)} operant="-"/>
      <Button onClick={() => multiplyNumbers(firstInput, secondInput)} operant="x"/>
      <Button onClick={() => divideNumbers(firstInput, secondInput)} operant="/"/>
     </div>
     <Screen result={result} />
    </div>
  )
}

export default App
