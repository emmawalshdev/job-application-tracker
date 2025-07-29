import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import JobList from './components/JobList'
import AddJobForm from './components/AddJobForm'
function App() {
  const [count, setCount] = useState(0)

  const addJob = (job) => {
    console.log('job', job);
  }
  return (
    <>
      <div>
      <AddJobForm sendJobData={addJob}/>
      <JobList/>
      </div>
    </>
  )
}

export default App
