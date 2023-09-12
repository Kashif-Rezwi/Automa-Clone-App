import React, { useContext, useState } from "react";
import Nodebar from "./Nodebar/Nodebar";
import "./editorMenu.css";
import NodeEditor from "./NodeEditor/NodeEditor";
import { AppContext } from "../../../Context/AppContext";

function EditorMenu() {
  const { data, showSidebar, width } = useContext(AppContext);

  return (
    <aside
      className="editor-menu"
      style={{
        display: width > "815" && showSidebar ? "block" : "none",
      }}
    >
      {data?.status ? <NodeEditor /> : <Nodebar />}
    </aside>
  );
}

export default EditorMenu;
