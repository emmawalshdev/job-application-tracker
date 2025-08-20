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
  const [editRowId, setEditRowId] = useState();
  const [formEntryToEdit, setFormEntryToEdit] = useState({ company:"", position: "", status: "" });

  const handleDeleteJob = (rowIndex) => {
    setJobListings(prev => prev.filter((_, index) => index !== rowIndex));
  };

  useEffect(() => {
    localStorage.setItem('jobListings', JSON.stringify(jobListings))
  }, [jobListings]);

  useEffect(() => {
    if (editRowId !== undefined && jobListings[editRowId]) {
      setFormEntryToEdit(jobListings[editRowId]);
    }
  }, [showEditJobForm, editRowId, jobListings]);
  
  
  const [filters, setFilters] = useState({
    company: [],
    position: [],
    status: []
  });

  const addJob = (job) => {
    setJobListings(prevJobs => [...prevJobs, job]);
  }

  const updateJob = (rowId, job) => {
    setJobListings(prevJobs => 
      prevJobs.map((j, index) => 
      index === rowId ? {...j, ...job} : j)
    );
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

  console.log('filtered jobs:', filteredJobs);


  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Header></Header>
      <AddJobForm sendJobData={addJob}/>
      <FilterBar setFilters={setSelectedFilters} jobListingsRecords={filteredJobs} filters={filters}/>
      <JobList setEditFormShow={setEditForm} setEditRowId={setEditRowId} jobListingsRecords={filteredJobs} onDelete={handleDeleteJob} />
      {showEditJobForm &&
        <EditJobForm formEntryToEdit={formEntryToEdit} editRowId={editRowId} sendJobData={updateJob} setEditFormShow={setEditForm} ></EditJobForm>
      }
      </div>
    </>
  )
}

export default App
