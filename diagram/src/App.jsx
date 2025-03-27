import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Workspace from './components/Workspace';
import './App.css';
import { createContext, useState } from 'react';

export const DiagramContext = createContext();

function App() {
  const [clickedVal, setClickedVal] = useState(null);

  return (
    <div className="p-0 text-bg-dark" data-bs-theme="dark">
      <Header />
      <DiagramContext.Provider value={{ clickedVal, setClickedVal }}>
        <div className="main">
          <Sidebar />
          <Workspace />
        </div>
      </DiagramContext.Provider>
    </div>
  );
};

export default App
