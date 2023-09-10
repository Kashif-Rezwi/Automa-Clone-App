import React from "react";
import Editor from "../../Components/Editor/Editor";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./home.css";
import { ReactFlowProvider } from "reactflow";
import { IoClose } from "react-icons/io5";
import Nodebar from "../../Components/Editor/Nodebar/Nodebar";
import { BiPlus } from "react-icons/bi";

function Home() {
  return (
    <div className="container">
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
        <div className="editor-tab">
          <ReactFlowProvider>
            <Nodebar />
            <Editor />
          </ReactFlowProvider>
        </div>
      </div>
    </div>
  );
}

export default Home;
