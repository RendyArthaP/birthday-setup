import React, { useState } from 'react';
import { Data } from './data/Data';
import List from './components/List/List';

function App() {
  const [peoples, setPeoples] = useState(Data)

  const clearAllButton = () => {
    setPeoples([])
  }
  return (
    <div className="flex flex-col justify-center items-left text-left mx-auto border-black border w-64 my-40 p-2">
      <div className="">
        <h3>{peoples.length} people birthday today</h3>
        <List peoples={peoples}/>
        <button
          onClick={clearAllButton}
          className="w-full bg-blue-400 rounded text-white p-1 text-sm"
        >
          Clear All
        </button>
      </div>
    </div>
  );
}

export default App;
