import React from "react";
import Navbar from './Navbar'
import "./Header.css";


const Header = (props) => {

  return (
    <header>
      <div className="header">
        <h2 className="Title">The Tempest: tools to tame ADHD</h2>
        <nav>
          <Navbar />
        </nav>
      </div>
    </header>
  );
};

export default Header;
