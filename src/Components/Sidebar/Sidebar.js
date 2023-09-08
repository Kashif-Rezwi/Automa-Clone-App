import React from "react";
import "./sidebar.css";

import Menubar from "./Menubar/Menubar";

function Sidebar() {
  return (
    <aside className="sidebar-wrapper">
      <Menubar />
    </aside>
  );
}

export default Sidebar;
