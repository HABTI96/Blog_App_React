import { useState } from 'react'
import { MainContent } from './component/MainContent'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <MainContent/>
    </>
  )
}

export default App
