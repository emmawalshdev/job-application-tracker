import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const FilterBar = ({ jobListingsRecords, filters, setFilters }) => {

  const companies = [...new Set(jobListingsRecords.map(job => job.company))];
  const positions = [...new Set(jobListingsRecords.map(job => job.position))];
  const statuses = [...new Set(jobListingsRecords.map(job => job.status))];

  const animatedComponents = makeAnimated();

  const mapOptions = (items) => items.map(item => ({ value: item, label: item }));

  const handleFilterChange = (field, selectedOptions) => {
    const updatedFilters = {
      ...filters,
      [field]: selectedOptions ? selectedOptions.map(option => option.value) : []
    };
    setFilters(updatedFilters);
  };

  const selectStyles = {
    control: (provided) => ({
      ...provided,
      borderRadius: '0.5rem',
      borderColor: '#CBD5E0', // gray-300
      minHeight: '40px',
      boxShadow: 'none',
      '&:hover': { borderColor: '#3B82F6' }, // blue-500
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: '#BFDBFE', // blue-200
      color: '#1E3A8A', // blue-900
      borderRadius: '9999px'
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: '#1E3A8A'
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      color: '#1E3A8A',
      ':hover': { backgroundColor: '#3B82F6', color: 'white' }
    }),
    placeholder: (provided) => ({
      ...provided,
      color: '#6B7280', // gray-500
      fontWeight: 500
    })
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col md:flex-row gap-4 mb-4">
      <div className="flex-1">
        <Select
          closeMenuOnSelect={false}
          components={animatedComponents}
          isMulti
          options={mapOptions(companies)}
          placeholder="Filter by Company"
          onChange={(selected) => handleFilterChange("company", selected)}
          styles={selectStyles}
        />
      </div>
      <div className="flex-1">
        <Select
          closeMenuOnSelect={false}
          components={animatedComponents}
          isMulti
          options={mapOptions(positions)}
          placeholder="Filter by Position"
          onChange={(selected) => handleFilterChange("position", selected)}
          styles={selectStyles}
        />
      </div>
      <div className="flex-1">
        <Select
          closeMenuOnSelect={false}
          components={animatedComponents}
          isMulti
          options={mapOptions(statuses)}
          placeholder="Filter by Status"
          onChange={(selected) => handleFilterChange("status", selected)}
          styles={selectStyles}
        />
      </div>
    </div>
  );
};

export default FilterBar;
