import React, { useContext, useEffect } from "react";
import Editor from "../../Components/Editor/Editor";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./home.css";
import { ReactFlowProvider } from "reactflow";
import { IoClose } from "react-icons/io5";
import { BiPlus } from "react-icons/bi";
import EditorMenu from "../../Components/Editor/EditorMenu/EditorMenu";
import { AppContext } from "../../Context/AppContext";

function Home() {
  const { showSidebar, ref } = useContext(AppContext);

  return (
    <div className="container" ref={ref}>
      <Sidebar />
      <div className="editor-main">
        <div className="editor-header">
          <div>
            <p>Testing Workflow</p>
            <IoClose />
          </div>
          <div>
            <BiPlus />
          </div>
        </div>
        <div
          className="editor-tab"
          style={{
            gridTemplateColumns: !showSidebar && "100%",
          }}
        >
          <ReactFlowProvider>
            <EditorMenu />
            <Editor />
          </ReactFlowProvider>
        </div>
      </div>
    </div>
  );
}

export default Home;
