import React, { useState } from "react";
import Toolbar from "./Toolbar";
import SideDrawer from "./SideDrawer";
import BackDrop from "./BackDrop";

export default function Navbar() {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => setSideDrawerOpen(!sideDrawerOpen);

  return (
    <div>
      <Toolbar drawerToggleClickHandler={drawerToggleClickHandler} />
      <SideDrawer show={sideDrawerOpen} setSideDrawerOpen={setSideDrawerOpen} />
      {sideDrawerOpen ? <BackDrop click={() => setSideDrawerOpen(false)} /> : null}
    </div>
  );
}