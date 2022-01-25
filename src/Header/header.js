import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
const Header = () => {
  const addDarkMode = () => {};
  return (
    <div>
      <div className="header-main">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/project">Project</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
