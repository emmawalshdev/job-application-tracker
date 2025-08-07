import React, { useState, useEffect } from 'react';


const FilterBar = ({jobListingsRecords, filters, setFilters}) => {

    const companies = [...new Set(jobListingsRecords.map(job => job.company))];
    const positions = [...new Set(jobListingsRecords.map(job => job.position))];

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
        <select onChange={(e) => handleFilterChange("company", e.target.value)} value={filters.company} data-cat="company">
            <option value="">All</option>
            {companies.map((company,index) => {
                return (
                    <option value={company} key={index}
                    >{company}</option>
                )
            })}
        </select>
        <div>Position</div>
        <select onChange={(e) => handleFilterChange("position", e.target.value)} value={filters.position}>
            <option value="">All</option>
            {positions.map((position, index) => {
                    return (
                        <option value={position} key={index}>
                            {position}
                        </option>
                    )
                })
            }
        </select>

        <div>sort by</div>

    </>
)
}

export default FilterBar;