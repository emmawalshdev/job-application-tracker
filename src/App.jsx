import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import JobList from './components/JobList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <JobList/>
      </div>
    </>
  )
}

export default App
