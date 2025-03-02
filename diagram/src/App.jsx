import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Workspace from './components/Workspace';
import './App.css';
import { useState } from 'react';

function App() {
  const [selectBtn, setSelected] = useState(null);

  const handleSelectedBtn = (btn) => {
    // alert("test handleSelectedBtn");
    setSelected(btn);
  }

  return (
    <div className="p-0 text-bg-dark" data-bs-theme="dark">
      <Header />
      <div className="main">
        <Sidebar selectBtn={handleSelectedBtn} />
        <Workspace selectedBtn={selectBtn}/>
      </div>
    </div>
  );
};

export default App
