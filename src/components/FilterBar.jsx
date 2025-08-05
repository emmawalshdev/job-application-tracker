import React, { useState, useEffect } from 'react';


const FilterBar = ({jobListingsRecords, filters, setFilters}) => {

    const companies = [...new Set(jobListingsRecords.map(job => job.company))];
    const positions = [...new Set(jobListingsRecords.map(job => job.position))];

    const [selectedFilterVals, setSelectedFilterVals] = useState({ company:"", position:"", status:""});

    function handleCompanyChange(e){
        setSelectedFilterVals({'company': e.target.value});
        setFilters(selectedFilterVals);
        return;
    }

    function handlePositionChange(e){
        return;
    }
return (
    <>
        <div>Filter bar - drop down & select</div>
        <div>Compnany</div>
        <select onChange={handleCompanyChange} value={filters.company} data-cat="company">
            <option value="">All</option>
            {companies.map((company,index) => {
                return (
                    <option value={company} key={index}
                    >{company}</option>
                )
            })}
        </select>
        <div>Position</div>
        <select onChange={handlePositionChange} value={filters.position}>
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