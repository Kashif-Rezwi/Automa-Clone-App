import { MenuItem, Select, TextField } from "@mui/material";
import React, {
  memo,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import "./nodeEditor.css";
import { IoArrowBack } from "react-icons/io5";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { AppContext } from "../../../../Context/AppContext";
import { useReactFlow } from "reactflow";
import { parse } from "flatted";

function NodeEditor() {
  const { setNodes, getNodes, getEdges } = useReactFlow();
  const {
    data: currentNode,
    setData,
    width,
    setIsUpdated,
    isUpdated,
  } = useContext(AppContext);
  const { data } = currentNode;
  const { label, description, interval, url, screenshot, cssSelecter } = data;

  const updateEditorNode = (key, value, id) => {
    setNodes((nodes) =>
      nodes.map((node) => {
        if (node.id === id) {
          if (key === "screenshot" && value === "none") {
            const updatedData = { ...node.data, [key]: value, cssSelecter: "" };
            return { ...node, data: updatedData };
          } else {
            const updatedData = { ...node.data, [key]: value };
            return { ...node, data: updatedData };
          }
        }
        return node;
      })
    );
  };

  const handleChange = (e) => {
    const { name: key, value } = e.target;

    const { id, data } = currentNode;

    if (key === "interval" && isNaN(Number(value))) {
      // If the key is "interval" and the input is not a number, do nothing.
      return;
    } else {
      if (key === "screenshot" && value === "none") {
        const updatedData = { ...data, [key]: value, cssSelecter: "" };
        setData((prevData) => ({ ...prevData, data: updatedData }));
      } else {
        const updatedData = { ...data, [key]: value };
        setData((prevData) => ({ ...prevData, data: updatedData }));
      }

      updateEditorNode(key, value, id);
    }
  };

  useEffect(() => {
    try {
      const workflowData = parse(localStorage.getItem("workflowData"));
      if (workflowData?.nodes?.length > 0) {
        const { nodes, edges } = workflowData;
        const storedNode = nodes?.filter((node) => node.id === currentNode.id);
        const allNodes = getNodes();
        const allEdges = getEdges();

        if (nodes.length !== allNodes.length) {
          setIsUpdated(true);
        } else if (edges.length !== allEdges.length) {
          setIsUpdated(true);
        } else if (
          storedNode[0]?.data?.description !== description ||
          storedNode[0]?.data?.interval !== interval ||
          storedNode[0]?.data?.url !== url ||
          storedNode[0]?.data?.screenshot !== screenshot ||
          storedNode[0]?.data?.cssSelecter !== cssSelecter
        ) {
          setIsUpdated(true);
        } else {
          setIsUpdated(false);
        }
      }
    } catch (error) {
      console.log({ error });
    }
  }, [description, interval, url, screenshot, cssSelecter, isUpdated]);

  return (
    <>
      <div className="node-navigate" style={{ width: width <= 815 && "250px" }}>
        <div onClick={() => setData((prev) => ({ ...prev, status: false }))}>
          <IoArrowBack />
          <p>{label}</p>
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
          value={description}
          onChange={handleChange}
        />

        {label === "Trigger" && (
          <TextField
            className="interval"
            name="interval"
            placeholder="Interval (in minutes)"
            value={interval}
            onChange={handleChange}
          />
        )}

        {label === "New Window" && (
          <TextField
            className="url"
            name="url"
            placeholder="URL"
            value={url}
            onChange={handleChange}
          />
        )}

        {label === "Take Screenshot" && (
          <div className="screenshot-div">
            <label>Take a screenshot of</label>
            <Select
              className="screenshot"
              name="screenshot"
              value={screenshot}
              onChange={handleChange}
            >
              <MenuItem value={"none"}>none</MenuItem>
              <MenuItem value={"A page"}>A page</MenuItem>
              <MenuItem value={"A full page"}>A full page</MenuItem>
              <MenuItem value={"An element"}>An element</MenuItem>
            </Select>
          </div>
        )}

        {((label === "Take Screenshot" && screenshot !== "none") ||
          label === "Click Element" ||
          label === "Get Text") && (
          <TextField
            className="css-selecter"
            name="cssSelecter"
            placeholder="CSS Selector"
            value={cssSelecter}
            onChange={handleChange}
          />
        )}
      </div>
    </>
  );
}

export default memo(NodeEditor);
