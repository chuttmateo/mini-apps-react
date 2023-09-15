import { useState } from 'react'
import './App.css'
import { Test } from './components'

function App() {

  const [a, setA] = useState(0)

  /* 
  SAMPLE FETCH
  const fetcher = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    return res.json()
  }

  const fetchInformation = async () => {
    const result = await fetcher()
    setA(result.id)
  }

  useEffect(() => {
    fetchInformation()
  }, []) */

  return (
    <>
      <button onClick={() => setA(a + 1)}> cambiar a</button>
      <Test />
      {/* <Test><>{a}</></Test> */}
    </>
  )
}

export default App
