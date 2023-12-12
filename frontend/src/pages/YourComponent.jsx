import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const YourComponent = () => {
  const [dropdownActive, setDropdownActive] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownActive(!dropdownActive);
  };

  const handleItemClick = (event) => {
    // Handle item click logic here
    console.log('Clicked item: ', event.target.innerText);
  };

  return (
    <div>
      <button className="navbar-toggler" data-target="" type="button" onClick={handleDropdownToggle}>
        <span className="navbar-toggler-icon" />
      </button>

      <div className={dropdownActive ? 'dropdown show' : 'dropdown'}>
        <button
          className="btn btn-warning dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          onClick={handleDropdownToggle}
        >
          <i className="fas fa-bars" />
        </button>
        <div className={dropdownActive ? 'dropdown-menu show' : 'dropdown-menu'} aria-labelledby="dropdownMenuButton">
          
          <Link to="../home" >
          <a className="dropdown-item" onClick={handleItemClick}>
            Home
          </a>
          </Link>

          <Link to="../About.jsx">
          <a className="dropdown-item" onClick={handleItemClick}>
            About Us
          </a>
          </Link>

          <Link to="../Certificates.jsx">
          <a className="dropdown-item" onClick={handleItemClick}>
            Certificates
          </a>
          </Link>

          <Link to="../NR.jsx">
          <a className="dropdown-item" onClick={handleItemClick}>
            Newspaper-Recognition
          </a>
          </Link>

          <Link to="../Donate.jsx">
          <a className="dropdown-item" onClick={handleItemClick}>
            Donate
          </a>
          </Link>

          <Link to="../Community.jsx">
          <a className="dropdown-item" onClick={handleItemClick}>
            Community
          </a>
          </Link>

          <Link to="../">
          <a className="dropdown-item" onClick={handleItemClick}>
            Logout
          </a>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default YourComponent;
