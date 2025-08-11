import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import JobList from './components/JobList'
import AddJobForm from './components/AddJobForm'
import FilterBar from './components/FilterBar'

function App() {
  
  const [jobListings, setJobListings] = useState(() => {
    const savedJobs = localStorage.getItem('jobListings');
    return savedJobs ? JSON.parse(savedJobs) : [];
  });

  useEffect(() => {
    localStorage.setItem('jobListings', JSON.stringify(jobListings))
  }, [jobListings]);

  const [filters, setFilters] = useState({
    company: [],
    position: [],
    status: []
  });


  const addJob = (job) => {
    //save listings in array
    setJobListings(prevJobs => [...prevJobs, job]);
  }

  const setSelectedFilters = (filters) => {
    //setSelectedFilters(filters);
    console.log(filters, 'filters');
    setFilters(filters);
  }

  const filteredJobs = jobListings.filter(job => {
    return (
      (filters.company.length === 0 || filters.company.includes(job.company)) &&
      (filters.position.length === 0 || filters.position.includes(job.position)) &&
      (filters.status.length === 0 || filters.status.includes(job.status))
    );
  });
  
  console.log('filters', filters);
  console.log('filtered jobs', filteredJobs);


  return (
    <>
      <div>
      <AddJobForm sendJobData={addJob}/>
      <FilterBar setFilters={setSelectedFilters} jobListingsRecords={filteredJobs} filters={filters}/>
      <JobList jobListingsRecords={filteredJobs} />
      </div>
    </>
  )
}

export default App
