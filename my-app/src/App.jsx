import { useState } from 'react'
// import ListC from './component/listC'
import TodoList from './component/listC'
import Crs from './component/crs'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <TodoList />
    <Crs />
    </>
  )
}

export default App
