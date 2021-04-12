import React from "react";
// import "./SideDrawer.css";
import {NavLink} from "react-router-dom";

const sideDrawer = props => {
  let drawerClasses = ["side-drawer"];

  if (props.show) {
    drawerClasses = ["side-drawer", "open"];
  }
  return (
    <nav className={drawerClasses.join(" ")}>
      <ul>
        <li>
          <NavLink to="/home" className="button-1 navlink">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" className="button-1 navlink">About</NavLink>
        </li>
        <li>
          <NavLink to="/projects" className="button-1 navlink">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="button-1 navlink">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default sideDrawer;
