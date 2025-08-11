import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { ModuleRegistry } from 'ag-grid-community';
import { ClientSideRowModelModule } from 'ag-grid-community';
import '../assets/JobList.css'

// Register the module you need (or AllCommunityModules if you want everything)
ModuleRegistry.registerModules([ClientSideRowModelModule]);

const JobList = ({ jobListingsRecords, onDelete }) => {

  const listingsRowData = jobListingsRecords.map((job, index) => {
    return {
      id: index,
      company: job.company,
      position: job.position,
      status: job.status
    }
  });

  const deleteCellRenderer = (params) => {
    console.log(params);
    return (
      <button onClick={() => onDelete(params.node.rowIndex)}>
        Delete
      </button>
    );
  };

  const [colDefs] = useState([
    { field: "company" },
    { field: "position" },
    { field: "status" },
    { 
      headerName: "Actions",
      cellRenderer: deleteCellRenderer,
      maxWidth: 120,
      suppressMenu: true,
      suppressSorting: true
    }
  ]);

  return (
    <div style={{ height: 500, width: '100%' }} className="joblist ag-theme-quartz">
      <AgGridReact
        rowData={listingsRowData}
        columnDefs={colDefs}
        animateRows={true}
      />
    </div>
  );
};

export default JobList;
