import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import JobList from './components/JobList'
import AddJobForm from './components/AddJobForm'
import FilterBar from './components/FilterBar'

function App() {
  const [jobListings, setJobListings] = useState([]);
  const [filters, setFilters] = useState({
    company: '',
    position: ''
  });

  const addJob = (job) => {
    //save listings in array
    setJobListings(prevJobs => [...prevJobs, job]);
  }

  const filteredJobs = jobListings.filter(job => {
    return (
      (filters.company === '' || job.company == filters.company) &&
      (filters.position === '' || job.position == filters.position)
    );
  });

  console.log(filteredJobs)
;
  // send jobs to jobList component
  return (
    <>
      <div>
      <AddJobForm sendJobData={addJob}/>
      <FilterBar jobListingsRecords={filteredJobs} filters={filters}/>
      <JobList jobListingsRecords={jobListings} filters={filters} setFilters={setFilters}/>
      </div>
    </>
  )
}

export default App
