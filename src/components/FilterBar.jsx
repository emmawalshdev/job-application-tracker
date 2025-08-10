import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';


const FilterBar = ({jobListingsRecords, filters, setFilters}) => {

    const companies = [...new Set(jobListingsRecords.map(job => job.company))];
    const positions = [...new Set(jobListingsRecords.map(job => job.position))];
    const statuses = [...new Set(jobListingsRecords.map(job => job.status))];

    const animatedComponents = makeAnimated();

    const optionsCompany = companies.map(company =>({
        value: company,
        label: company
    }));

    const optionsPosition = positions.map(position =>({
        value: position,
        label: position
    }));

    const optionsStatus = statuses.map(status =>({
        value: status,
        label: status
    }));

    console.log(optionsCompany, optionsPosition);

    const [selectedFilterVals, setSelectedFilterVals] = useState({
        company: "",
        position: "",
    });

    function handleFilterChange(field, value){
        const updatedFilters = {
            ...selectedFilterVals,
            [field]: value
        }

        setSelectedFilterVals(updatedFilters);
        console.log('called', updatedFilters);
    }

return (
    <>
        <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            onChange={(selectedOption) => handleFilterChange("company", selectedOption.map(option => option.value))}
            options={optionsCompany} 
            placeholder={<span>Company</span>}
        />
        <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            onChange={(selectedOption) => handleFilterChange("position", selectedOption.map(option => option.value))}
            options={optionsPosition} 
            placeholder={<span>Position</span>}
        />
        <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            onChange={(selectedOption) => handleFilterChange("status", selectedOption.map(option => option.value))}
            options={optionsStatus} 
            placeholder={<span>Status</span>}
        />
    </>
)
}

export default FilterBar;