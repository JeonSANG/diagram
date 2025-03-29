import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Workspace from './components/Workspace';
import './App.css';

function App() {

  return (
    <div className="p-0 text-bg-dark" data-bs-theme="dark">
      <Header />
        <div className="main">
          <Sidebar />
          <Workspace />
        </div>
    </div>
  );
};

export default App
