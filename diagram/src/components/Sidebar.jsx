import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { clickItem } from '../redux/sidebarSelectSlice';
import 'bootstrap/dist/css/bootstrap.min.css';

const Sidebar = () => {
  const [openState, setOpenState] = useState({});
  const dispatch = useDispatch()

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
              <a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded sidebar-item" onClick={() => dispatch(clickItem("item1"))}>item1</a>
              <a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded sidebar-item" onClick={() => dispatch(clickItem("item2"))}>item2</a>
              <a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded sidebar-item" onClick={() => dispatch(clickItem("item3"))}>item3</a>
            </li>
            <li>
              <a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded sidebar-item" onClick={() => dispatch(clickItem("item4"))}>item4</a>
              <a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded sidebar-item" onClick={() => dispatch(clickItem("item5"))}>item5</a>
              <a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded sidebar-item" onClick={() => dispatch(clickItem("item6"))}>item6</a>
            </li>
            <li>
              <a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded sidebar-item" onClick={() => dispatch(clickItem("item7"))}>item7</a>
              <a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded sidebar-item" onClick={() => dispatch(clickItem("item8"))}>item8</a>
              <a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded sidebar-item" onClick={() => dispatch(clickItem("item9"))}>item9</a>
            </li>
            <li>
              <a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded sidebar-item" onClick={() => dispatch(clickItem("item10"))}>item10</a>
              <a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded sidebar-item" onClick={() => dispatch(clickItem("item11"))}>item11</a>
              <a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded sidebar-item" onClick={() => dispatch(clickItem("item12"))}>item12</a>
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