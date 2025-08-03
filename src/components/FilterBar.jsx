import React, { useState, useEffect } from 'react';


const FilterBar = ({jobListingsRecords, filters}) => {
    console.log(jobListingsRecords);

    const companies = [...new Set(jobListingsRecords.map(job => job.company))];
    const positions = [...new Set(jobListingsRecords.map(job => job.position))]
    function handleCompanyChange(){
        return;
    }
return (
    <>
        <div>Filter bar - drop down & select</div>
        <div>Compnany</div>
        <select onChange={handleCompanyChange} value={filters.company}>
            <option value="">All</option>
            {companies.map((company,index) => {
                return (
                    <option value={company} key={index}
                    >{company}</option>
                )
            })}
        </select>
        <div>Position</div>
        <select value={filters.position}>
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