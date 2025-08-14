import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { ModuleRegistry } from 'ag-grid-community';
import { ClientSideRowModelModule } from 'ag-grid-community';
import '../assets/JobList.css'

// Register the module you need (or AllCommunityModules if you want everything)
ModuleRegistry.registerModules([ClientSideRowModelModule]);

const JobList = ({ jobListingsRecords, onDelete, setEditFormShow }) => {

  const [expandedRows, setExpandedRows] = useState({});
  const [editJobList, setJobList] = useState(false);

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
      <>
      <button onClick={() => setEditFormShow(true)}>
        E
      </button>
      <button onClick={() => onDelete(params.node.rowIndex)}>
        D
      </button>
      </>
    );
  };

  const toggleExpand = (rowIndex) => {
    setExpandedRows(prev => ({
      ...prev,
      [rowIndex]: !prev[rowIndex]
    }));
  };
  
  const ResultCell = ({ rowIndex }) => {
    const isExpanded = !!expandedRows[rowIndex];
  
    return (
      <div style={{ background: 'lightyellow', padding: '4px' }}>
        <p>hidge</p>
        {!isExpanded && (
          <div className='result-no-response'>
            <span>No response</span>
            <button onClick={() => toggleExpand(rowIndex)}>
              Update
            </button>
          </div>
        )}
  
        {isExpanded && (
          <div className='result-update'>
            <button onClick={() => alert("Interview clicked")}>
                Interview
            </button>
            <button onClick={() => alert("Offer clicked")}>
                Offer
            </button>
          </div>
        )}
      </div>
    )
  }
  

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
    },
    {
      headerName: "Result",
      cellRendererFramework: (params) => <ResultCell rowIndex={params.node.rowIndex} />,
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
