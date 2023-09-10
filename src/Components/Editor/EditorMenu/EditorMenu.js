import React, { useContext, useState } from "react";
import Nodebar from "./Nodebar/Nodebar";
import "./editormenu.css";
import NodeEditor from "./NodeEditor/NodeEditor";
import { AppContext } from "../../../Context/AppContext";

function EditorMenu() {
  const { data } = useContext(AppContext);

  return (
    <aside className="editor-menu">
      {data?.status ? <NodeEditor /> : <Nodebar />}
    </aside>
  );
}

export default EditorMenu;
