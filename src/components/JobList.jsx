import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { ModuleRegistry } from 'ag-grid-community';
import { ClientSideRowModelModule } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

// Register the module you need
ModuleRegistry.registerModules([ClientSideRowModelModule]);

const JobList = ({ jobListingsRecords, onDelete, setEditFormShow, setEditRowId }) => {

  const listingsRowData = jobListingsRecords.map((job, index) => ({
    id: index,
    company: job.company,
    date: job.date,
    position: job.position,
    status: job.status
  }));

  const statusCellRenderer = (params) => {
    const colorMap = {
      "offer": "bg-green-200 text-green-800",
      "interview scheduled": "bg-blue-200 text-blue-800",
      "rejected": "bg-red-200 text-red-800",
      "withdrawn": "bg-gray-200 text-gray-800",
    };
    const classes = colorMap[params.value?.toLowerCase()] || "bg-gray-200 text-gray-800";
    return <span className={`px-2 py-1 rounded-full text-sm font-semibold ${classes}`}>{params.value}</span>;
  };

  const actionsCellRenderer = (params) => (
    <div className="flex gap-2 justify-center">
      <button
        onClick={() => {
          setEditFormShow(true);
          setEditRowId(params.node.rowIndex);
        }}
        className="bg-yellow-400 hover:bg-yellow-500 text-white px-2 py-1 rounded text-sm"
      >
        Edit
      </button>
      <button
        onClick={() => onDelete(params.node.rowIndex)}
        className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-sm"
      >
        Delete
      </button>
    </div>
  );

  const [colDefs] = useState([
    { field: "company", headerName: "Company", flex: 1 },
    { field: "position", headerName: "Position", flex: 1 },
    { field: "status", headerName: "Status", flex: 1, cellRenderer: statusCellRenderer },
    { field: "date", headerName: "Date", flex: 1 },
    {
      headerName: "Actions",
      cellRenderer: actionsCellRenderer,
      maxWidth: 180,
      suppressMenu: true,
      suppressSorting: true
    },
  ]);

  return (
    <div className="ag-theme-alpine rounded-lg overflow-hidden shadow-md" style={{ height: 500, width: '100%' }}>
      <AgGridReact
        rowData={listingsRowData}
        columnDefs={colDefs}
        animateRows={true}
        rowHeight={50}
        headerHeight={50}
      />
    </div>
  );
};

export default JobList;
