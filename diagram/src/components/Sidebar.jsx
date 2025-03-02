import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Sidebar = ({selectBtn}) => {
  const [openState, setOpenState] = useState({});

  const handleClick = (index) => {
    setOpenState((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div className="flex-shrink-0 p-3 " id="leftToolBar">
      <ul className="list-unstyled ps-0">
        <li className="mb-1">
        <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 dropdown-toggle" onClick={() => handleClick(0)}>
          シケンス図
        </button>
        <Collapse in={openState[0]}>
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li>
              <a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded" onClick={selectBtn("shape")}>shape</a>
              <a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">TODO</a>
              <a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">TODO</a>
            </li>
            <li>
              <a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">TODO</a>
              <a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">TODO</a>
              <a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">TODO</a>
            </li>
            <li>
              <a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">TODO</a>
              <a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">TODO</a>
              <a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">TODO</a>
            </li>
            <li>
              <a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">TODO</a>
              <a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">TODO</a>
              <a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">TODO</a>
            </li>
          </ul>
          </Collapse>
      </li>

      <li className="border-top my-3"></li>

      <li className="mb-1">
        <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 dropdown-toggle" onClick={() => handleClick(1)}>
          ERD図
        </button>
        <Collapse in={openState[1]}>
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">TODO</a></li>
            <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">TODO</a></li>
            <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">TODO</a></li>
            <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">TODO</a></li>
          </ul>
        </Collapse>
      </li>
    </ul>
    </div>
  )
};

export default Sidebar;