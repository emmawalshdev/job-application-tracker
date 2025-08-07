import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';


const FilterBar = ({jobListingsRecords, filters, setFilters}) => {

    const companies = [...new Set(jobListingsRecords.map(job => job.company))];
    const positions = [...new Set(jobListingsRecords.map(job => job.position))];
    const animatedComponents = makeAnimated();

    const combinedOptions = [...companies, ...positions];
    const options = combinedOptions.map(company =>({
        value: company,
        label: company
    }));

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
        console.log(updatedFilters);
    }

return (
    <>
        <div>Filter bar - drop down & select</div>
        <div>Compnany</div>
        <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            options={options} 
        />

        <div>sort by</div>

    </>
)
}

export default FilterBar;