import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Navbar from './Navbar'
import "./Header.css";


const Header = (props) => {
  const [dropdownvis, setdropdownvis] = useState(false);

  const toggleDropdown = () => {
    setdropdownvis(!dropdownvis);
  };

  return (
    <header>
      <div className="header">
        <h2 className="Title">The Tempest: tools to tame ADHD</h2>
        <nav>
          <Navbar />
          {/* <button classname="Menu" onClick={toggleDropdown}>
            Menu
          </button>
          <div className={dropdownvis ? "dropdown-vis" : "dropdown-hidden"}>
            <Link to="/">Home</Link>
            <Link to="/BrownNoise">Audio for Focus</Link>
            <Link to="/Pomodoro">Pomodoro Timer</Link>
            <Link to="/Survey">Survey</Link>
            <Link to="/Profile">Admin</Link>
          </div> */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
