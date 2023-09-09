import React from "react";
import Editor from "../../Components/Editor/Editor";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./home.css";
import { ReactFlowProvider } from "reactflow";
import Nodebar from "../../Components/Editor/Nodebar/Nodebar";

function Home() {
  return (
    <div className="container">
      <Sidebar />
      <div className="editor-tab">
        <div></div>
        <div>
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
