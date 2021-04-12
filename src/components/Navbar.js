// import React from 'react';
// import "../index.css";
// import logo from "../images/logo.png";
// import { NavLink } from "react-router-dom";

// export default function Navbar() {

//     function myFunction() {
//         var x = document.getElementById("myTopnav");
//         if (x.className === "navbar-right-container") {
//             x.className += " responsive";
//         } else {
//             x.className = "navbar-right-container";
//         }
//     }

//     return (
//         <>
//             <div className="navbar-container">
//                 <div className="navbar-left-container">
//                     <NavLink to='/home'><img src={logo} alt='logo' /></NavLink>
//                 </div>

//                 <div className="navbar-right-container" id="myTopnav">
//                     <NavLink to="/home" className="button-1 navlink">Home</NavLink>
//                     <NavLink to="/about" className="button-1 navlink">About</NavLink>
//                     <NavLink to="/projects" className="button-1 navlink">Projects</NavLink>
//                     <NavLink to="/contact" className="button-1 navlink">Contact</NavLink>
//                     <NavLink to="javascript:void(0);" className="icon button-1 navlink" onClick={myFunction}>
//                         <i className="fa fa-bars"></i>
//                     </NavLink>
//                 </div>
//             </div>
//         </>
//     )
// }


import React from "react";
import Toolbar from "./Toolbar";
// import "./styles.css";
import SideDrawer from "./SideDrawer";
import BackDrop from "./BackDrop";

class App extends React.Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };
  backDropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    // let sideDrawer;
    let backdrop;

    if (this.state.sideDrawerOpen) {
      // sideDrawer = <SideDrawer />;
      backdrop = <BackDrop click={this.backDropClickHandler} />;
    }
    return (
      <div style={{ height: "100%" }}>
        <Toolbar drawerToggleClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
      </div>
    );
  }
}

export default App;
