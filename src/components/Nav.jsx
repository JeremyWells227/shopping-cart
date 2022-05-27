import React from "react";
import { NavLink, BrowserRouter as Router } from "react-router-dom";
import "../styles/Nav.scss";

const Nav = () => {
  return (
    <Router>
      <div className="nav">
        <ul className="navlinks">
          <li key="home" id="home">
            <NavLink to="/home" activeClassName="selected">
              Home
            </NavLink>
          </li>
          <li key="shop" id="shop">
            <NavLink to="/shop" activeClassName="selected">
              Shop
            </NavLink>
          </li>
        </ul>
      </div>
    </Router>
  );
};

export default Nav;
