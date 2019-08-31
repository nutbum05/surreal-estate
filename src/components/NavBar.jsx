import React from 'react';
import '../styles/NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="NavBar">
      <img className="logo" src="../images/logo.png" />
      <ul className="nav">
        <Link className="item" to="/">
          <button>View Properties</button>
        </Link>
        <Link className="item" to="/add-property">
          <button>Add a Property</button>
        </Link>
      </ul>
    </div>

  );
};
export default NavBar;
