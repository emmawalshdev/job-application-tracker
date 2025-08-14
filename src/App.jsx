import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import JobList from './components/JobList'
import AddJobForm from './components/AddJobForm'
import FilterBar from './components/FilterBar'
import Header from './components/Header'
import EditJobForm from './components/EditJobForm'

function App() {
  
  const [jobListings, setJobListings] = useState(() => {
    const savedJobs = localStorage.getItem('jobListings');
    return savedJobs ? JSON.parse(savedJobs) : [];
  });

  const [showEditJobForm, setShowEditForm] = useState();

  const handleDeleteJob = (rowIndex) => {
    setJobListings(prev => prev.filter((_, index) => index !== rowIndex));
  };

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
    setFilters(filters);
  }

  const setEditForm = (toShow) => {
    setShowEditForm(toShow);
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
      <Header></Header>
      <AddJobForm sendJobData={addJob}/>
      <FilterBar setFilters={setSelectedFilters} jobListingsRecords={filteredJobs} filters={filters}/>
      <JobList setEditFormShow={setEditForm} jobListingsRecords={jobListings} onDelete={handleDeleteJob} />
      {showEditJobForm &&
        <EditJobForm sendJobData={addJob} setEditFormShow={setEditForm}></EditJobForm>
      }
      </div>
    </>
  )
}

export default App
