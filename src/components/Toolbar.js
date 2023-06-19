import React from "react";
import SideMenu from "./SideMenu";
import logo from "../images/logo.png";
import { NavLink } from "react-router-dom";

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar_navigator navbar-container">
      <div className="toggle-btn">
        <SideMenu click={props.drawerToggleClickHandler} />
      </div>
      <div className="toolbar_logo navbar-left-container">
        <NavLink to='/home'><img src={logo} alt='logo' /></NavLink>
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation-items navbar-right-container">
        <ul>
          <li><NavLink to="/home" className="button-1 navlink">Home</NavLink></li>
          <li><NavLink to="/about" className="button-1 navlink">About</NavLink></li>
          <li><NavLink to="/projects" className="button-1 navlink">Projects</NavLink></li>
          <li><NavLink to="/contact" className="button-1 navlink">Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;