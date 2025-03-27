import React, { useContext, useState } from 'react';
import { DiagramContext } from '../App';
import { Collapse } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Sidebar = () => {
  const { setClickedVal } = useContext(DiagramContext);
  const [openState, setOpenState] = useState({});

  const handleDiagramClick = (value) => {
    setClickedVal(value);
  };

  const handleCollapseClick = (index) => {
    setOpenState((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div className="flex-shrink-0 p-3 " id="leftToolBar">
      <ul className="list-unstyled ps-0">
        <li className="mb-1">
        <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 dropdown-toggle" onClick={() => handleCollapseClick(0)}>
          シケンス図
        </button>
        <Collapse in={openState[0]}>
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li>
              <a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded sidebar-item" onClick={() => handleDiagramClick("item1")}>item1</a>
              <a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded sidebar-item" onClick={() => handleDiagramClick("item2")}>item2</a>
              <a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded sidebar-item" onClick={() => handleDiagramClick("item3")}>item3</a>
            </li>
            <li>
              <a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded sidebar-item" onClick={() => handleDiagramClick("item4")}>item4</a>
              <a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded sidebar-item" onClick={() => handleDiagramClick("item5")}>item5</a>
              <a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded sidebar-item" onClick={() => handleDiagramClick("item6")}>item6</a>
            </li>
            <li>
              <a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded sidebar-item" onClick={() => handleDiagramClick("item7")}>item7</a>
              <a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded sidebar-item" onClick={() => handleDiagramClick("item8")}>item8</a>
              <a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded sidebar-item" onClick={() => handleDiagramClick("item9")}>item9</a>
            </li>
            <li>
              <a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded sidebar-item" onClick={() => handleDiagramClick("item10")}>item10</a>
              <a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded sidebar-item" onClick={() => handleDiagramClick("item11")}>item11</a>
              <a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded sidebar-item" onClick={() => handleDiagramClick("item12")}>item12</a>
            </li>
          </ul>
          </Collapse>
      </li>

      <li className="border-top my-3"></li>

      <li className="mb-1">
        <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 dropdown-toggle" onClick={() => handleCollapseClick(1)}>
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