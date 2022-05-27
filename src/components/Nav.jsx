import React from "react";
import { NavLink, BrowserRouter as Router } from "react-router-dom";
import "../styles/Nav.scss";

const Nav = () => {
  return (
      <div className="nav">
				<h1 className="title">JarHead 🫙</h1>
        <ul className="navlinks">
          <li key="home" id="home">
            <NavLink to="/home" className={(navdata)=> (navdata.isActive ? "active" : "" )}>
              Home
            </NavLink>
          </li>
          <li key="shop" id="shop">
            <NavLink to="/shop" className={(navdata)=> (navdata.isActive ? "active" : "" )} >
              Shop
            </NavLink>
          </li>
        </ul>
      </div>
  );
};

export default Nav;
