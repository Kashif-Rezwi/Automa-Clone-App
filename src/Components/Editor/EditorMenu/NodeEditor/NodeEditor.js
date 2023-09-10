import { TextField } from "@mui/material";
import React, { useCallback, useContext, useEffect, useState } from "react";
import "./nodeEditor.css";
import { IoArrowBack } from "react-icons/io5";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { AppContext } from "../../../../Context/AppContext";
import { useReactFlow } from "reactflow";

function NodeEditor() {
  const { setNodes, getNodes } = useReactFlow();
  const { data, setData } = useContext(AppContext);
  const [text, setText] = useState(data?.data?.description || "");
  const currentNode = getNodes()?.filter((node) => node.id === data?.id);

  const updateNode = (text) => {
    setNodes((nodes) =>
      nodes.map((node) => {
        if (node.id === data?.id) {
          const updatedData = { ...node.data, description: text };
          return { ...node, data: updatedData };
        }
        return node;
      })
    );
  };

  useEffect(() => {
    updateNode(text);
  }, [text]);

  return (
    <>
      <div className="node-navigate">
        <div onClick={() => setData((prev) => ({ ...prev, status: false }))}>
          <IoArrowBack />
          <p>{currentNode[0]?.data?.label}</p>
        </div>
        <AiOutlineInfoCircle />
      </div>
      <div className="node-editor">
        <TextField
          className="description"
          placeholder="Description"
          multiline
          rows={2}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    </>
  );
}

export default NodeEditor;
