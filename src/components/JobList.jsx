import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { ModuleRegistry } from 'ag-grid-community';
import { ClientSideRowModelModule } from 'ag-grid-community';
import '../assets/JobList.css'


// Register the module you need (or AllCommunityModules if you want everything)
ModuleRegistry.registerModules([ClientSideRowModelModule]);

const JobList = () => {
  const [rowData, setRowData] = useState([
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ]);

  const [colDefs] = useState([
    { field: "make" },
    { field: "model" },
    { field: "price" },
    { field: "electric" },
  ]);

  return (
    <div style={{ height: 500, width: '100%' }} className="joblist ag-theme-quartz">
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        animateRows={true}
      />
    </div>
  );
};

export default JobList;
