import React, { Component } from "react";

//Stateless functional component
const Navbar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <span className="badge badge-pill badge-secondary m-2">
        {totalCounters}
      </span>
    </nav>
  );
};

export default Navbar;
