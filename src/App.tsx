import React from 'react';
import './App.css';
import { sortData } from "./api/sales.api";
import { PivotTable } from './components/PivotTable';

function App() {
  const pivotData = sortData();

  return (
    <div className="App">
      <PivotTable 
        data={ pivotData.data }
        subColumns={ Object.keys(pivotData.statesList).sort() }
      />
    </div>
  );
}

export default App;
