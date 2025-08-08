import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';


const FilterBar = ({jobListingsRecords, filters, setFilters}) => {

    const companies = [...new Set(jobListingsRecords.map(job => job.company))];
    const positions = [...new Set(jobListingsRecords.map(job => job.position))];
    const animatedComponents = makeAnimated();

    const optionsCompany = companies.map(company =>({
        value: company,
        label: company
    }));

    const optionsPosition = positions.map(position =>({
        value: position,
        label: position
    }));

    console.log(optionsCompany, optionsPosition);

    const [selectedFilterVals, setSelectedFilterVals] = useState({
        company: "",
        position: "",
    });

    function handleFilterChange(field, value){
        console.log("value",value);
        const updatedFilters = {
            ...selectedFilterVals,
            [field]: value
        }

        setSelectedFilterVals(updatedFilters);
        console.log(updatedFilters);
    }

    function handleFilterChange(field, value){
        console.log("value",value);
        const updatedFilters = {
            ...selectedFilterVals,
            [field]: value
        }

        setSelectedFilterVals(updatedFilters);
        console.log(updatedFilters);
    }
return (
    <>
        <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            onChange={(selectedOption) => handleFilterChange("company", selectedOption.map(opt.value))}
            options={optionsCompany} 
            placeholder={<span>Company</span>}
        />
        <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            onChange={(selectedOption) => handleFilterChange("company", selectedOption.map(opt.value))}
            options={optionsPosition} 
            placeholder={<span>Position</span>}
        />
    </>
)
}

export default FilterBar;