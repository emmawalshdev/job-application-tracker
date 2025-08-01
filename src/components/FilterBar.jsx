import React, { useState, useEffect } from 'react';


const FilterBar = ({jobListingsRecords}) => {
    console.log(jobListingsRecords);

    const company = jobListingsRecords.map(job => job.company);
    const position = jobListingsRecords.map(job => job.position);


return (
    <>
        <div>Filter bar - drop down & select</div>
        <div>Compnany</div>
        <ul>
            {company.map((company, index) => (
                <li key={index}>{company}</li>
            ))}
        </ul>
        <div>Postition</div>
        <ul>
            {position.map((position, index) => (
                <li key={index}>{position}</li>
            ))}
        </ul>
        <div>sort by</div>

    </>
)
}

export default FilterBar;