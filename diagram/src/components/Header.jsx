import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  const [openState, setOpenState] = useState(false);
  const dropdownToggle = () => { setOpenState(!openState); };

  return (
    <header className="header p-3 border-bottom">
    <div className="container-fluid d-grid gap-3 align-items-center">
      <div className="dropdown" onClick={() => dropdownToggle(openState)}>
        <a href="#" className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle">
          <h2>Diagram Editor</h2>
        </a>
        <Collapse in={openState}>
          <ul className="dropdown-menu text-small shadow">
            <li><a className="dropdown-item active" href="#" aria-current="page">New File</a></li>
            <li><a className="dropdown-item" href="#">Open File</a></li>
            <li><a className="dropdown-item" href="#">Save</a></li>
            <li><a className="dropdown-item" href="#">Save As</a></li>
          </ul>
        </Collapse>
      </div>
    </div>
  </header>
  );
};
export default Header;
