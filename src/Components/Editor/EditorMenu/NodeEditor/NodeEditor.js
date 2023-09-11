import { MenuItem, Select, TextField } from "@mui/material";
import React, { useCallback, useContext, useEffect, useState } from "react";
import "./nodeEditor.css";
import { IoArrowBack } from "react-icons/io5";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { AppContext } from "../../../../Context/AppContext";
import { useReactFlow } from "reactflow";

function NodeEditor() {
  const { setNodes, getNodes } = useReactFlow();
  const { data: currentNode, setData } = useContext(AppContext);

  const updateEditorNode = useCallback((key, value, id) => {
    console.log({ key, value, id });
    setNodes((nodes) =>
      nodes.map((node) => {
        if (node.id === id) {
          const updatedData = { ...node.data, [key]: value };
          return { ...node, data: updatedData };
        }
        return node;
      })
    );
  }, []);

  const handleChange = (e) => {
    const { name: key, value } = e.target;

    const { id, data } = currentNode;
    const updatedData = { ...data, [key]: value };
    setData((prevData) => ({ ...prevData, data: updatedData }));

    updateEditorNode(key, value, id);
  };

  //   console.log({ currentNode, AllNodes: getNodes() });

  return (
    <>
      <div className="node-navigate">
        <div onClick={() => setData((prev) => ({ ...prev, status: false }))}>
          <IoArrowBack />
          <p>{currentNode?.data?.label}</p>
        </div>
        <AiOutlineInfoCircle />
      </div>
      <div className="node-editor">
        <TextField
          className="description"
          name="description"
          placeholder="Description"
          multiline
          rows={2}
          value={currentNode?.data?.description}
          onChange={handleChange}
        />

        {currentNode?.data?.label === "Trigger" && (
          <TextField
            className="interval"
            name="interval"
            placeholder="Interval (in minutes)"
            value={currentNode?.data?.interval}
            onChange={handleChange}
          />
        )}

        {currentNode?.data?.label === "New Window" && (
          <TextField
            className="url"
            name="url"
            placeholder="URL"
            value={currentNode?.data?.url}
            onChange={handleChange}
          />
        )}

        {currentNode?.data?.label === "Take Screenshot" && (
          <div className="screenshot-div">
            <label>Take a screenshot of</label>
            <Select
              className="screenshot"
              name="screenshot"
              value={currentNode?.data?.screenshot}
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </div>
        )}

        {(currentNode?.data?.label === "Take Screenshot" ||
          currentNode?.data?.label === "Click Element" ||
          currentNode?.data?.label === "Get Text") && (
          <TextField
            className="css-selecter"
            name="cssSelecter"
            placeholder="CSS Selector"
            value={currentNode?.data?.cssSelecter}
            onChange={handleChange}
          />
        )}
      </div>
    </>
  );
}

export default NodeEditor;
