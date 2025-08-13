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
    return (
      <button onClick={() => onDelete(params.node.rowIndex)}>
        Delete
      </button>
    );
  };

  const resultCellRenderer = (params) => {

    const [expandedRows, setExpandedRows] = useState({});
    const rowIndex = params.node.rowIndex;

    const isExpanded = !!expandedRows[rowIndex];

    const toggleExpand = () => {
      setExpandedRows(prev => ({
        ...prev,
        [rowIndex]: !prev[rowIndex]
      }));
    }

    return (
      <>
      {!isExpanded && (
      <div className='result-no-response'>
        <span>No response</span>
        <button onClick={toggleExpand}>
          Update
        </button>
      </div>
      )}

      {isExpanded && (
        <div className='result-update'>
        <button onClick={() => alert("clicked")}>
            Interview
        </button>
        <button onClick={() => alert("clicked")}>
            offer
        </button>
      </div>
      )}

      </>
    )
  }

  const [colDefs] = useState([
    { field: "company" },
    { field: "position" },
    { field: "status" },
    { 
      headerName: "Result",
      cellRenderer: resultCellRenderer,
      maxWidth: 120,
      suppressMenu: true,
      suppressSorting: true
    },
    { 
      headerName: "Actions",
      cellRenderer: deleteCellRenderer,
      maxWidth: 120,
      suppressMenu: true,
      suppressSorting: true
    },
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
