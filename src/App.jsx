import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import JobList from './components/JobList'
import AddJobForm from './components/AddJobForm'
function App() {
  const [jobListings, setJobListings] = useState([]);

  const addJob = (job) => {
    //save listings in array
    setJobListings(prevJobs => [...prevJobs, job]);
    console.log('job listings:', jobListings);

  }

  // send jobs to jobList component
  return (
    <>
      <div>
      <AddJobForm sendJobData={addJob}/>
      <JobList jobListingsRecords={jobListings}/>
      </div>
    </>
  )
}

export default App
